# InputText

### Handling browser autofill

It is now standard practice for browsers to save users information and use it to autofill forms for them to provide users with the best experience.

Reasons this can be tricky:

- Browsers override our styles with theirs in these situations. This means they add a blue or yellow background on the inputs that have been autofilled and that could clash with our styles.
- Autofilling a form does _not_ trigger any events on the input. This can cause issues if, for instance, you have a floating label that is triggered solely by JS like we do.

Tackling the first problem isn't too difficult. All we have to do is apply the styels that we want targeting the pseudo element that the browsers add. We use `-webkit-box-shadow` to override the yellow/blue background color the browser adds to the input. We also need to set the color of the font - especially so that you can read the text in dark mode.

```js
"&:-webkit-autofill": {
    "-webkit-box-shadow": `0 0 0 100px ${theme.colors.secondary} inset`,
    "-webkit-text-fill-color": `${theme.colors.primary}`,
  },
```

The second problem is trickier to solve. How can we make our label float when no event is triggered on the autofill?

Approaches we can take:

- Use an interval/timeout to check whether the pseudo class has been applied.
  - This is not the best approach because it can make the page slower. Also,We are working on a component level, which means that each input component on the form would have one of these timers. Imagine a page full of inputs with each input having a never-ending interval! The horror!
- Use the `:has` selector.
  - This could work, but it's not the best solution. We would have to poll the input to see if the selector has been applied. Additionally, the `:has` selector is still a draft and not fully supported by all browsers.
- Listen for an animation change and use that to trigger label.
  - This is the solution we ultimately went with. A more thorough explanation can be found below, but essentially add an animation to the autofill pseudo class selectors and use JS to listen for the change.

#### Our solution

From all the possible approaches, we opted to go with listening to the animation. This solution was adapted from a [solution Klarna UI](https://medium.com/@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7) has used in the past.

To start, we had to add the animation on the autofill pseudo selectors. We created two animations and called them inside the autofill selectors. Note: We need to add these animations to the globalCss because stitches will change the class names and we won't be able to match them inside of our component. We couldn't just add them to globalStyles, however, because not all teams have adopted and/or are using our global styles.

```js
export const globalJsTriggerAnimations = globalCss({
  "@keyframes jsTriggerAutoFillStart": {
    from: {
      alpha: 1,
    },
  },
  "@keyframes jsTriggerAutoFillCancel": {
    from: {
      alpha: 1,
    },
  },
});
```

```js
export const unstyledInputStyles = {
  "&:-webkit-autofill": {
    "-webkit-box-shadow": `0 0 0 100px ${theme.colors.secondary} inset`,
    "-webkit-text-fill-color": `${theme.colors.primary}`,
    // used to trigger JS so that we can do the label shrinking
    animation: "jsTriggerAutoFillStart 200ms",
  },

  "&:not(:-webkit-autofill)": {
    // used to trigger JS so that we can stop the label shrinking
    animation: "jsTriggerAutoFillCancel 200ms",
  },
};
```

In our component we now have to create an event listener to listen to these animations. We need to check the animationName to make sure that it matches either the start or cancel, so that our label floats or stays normal accordingly.

For this component, we also accept a reference from outside and have an interal reference to keep track of our listener. We have to make sure that we don't forget about the external reference.

```js
export const InputText = () => {
  // This useEffect checks whether we have an external reference.
  // If so, then we take it into account
  useEffect(() => {
    if (!ref) return;

    if (typeof ref === "function") {
      ref(internalRef.current);
    } else {
      ref.current = internalRef.current;
    }
  }, [ref, internalRef]);

  useEffect(() => {
    const element = internalRef.current;

    const onAnimationStart = (e) => {
      // This switch case will not work due to the way stitches does classes
      switch (e.animationName) {
        case "jsTriggerAutoFillStart":
          return setIsAutofilled(true);
        case "jsTriggerAutoFillCancel":
          return setIsAutofilled(false);
      }
    };

    element?.addEventListener("animationstart", onAnimationStart, false);

    // don't forget to clean up your listener
    return () => {
      element?.removeEventListener("animationstart", onAnimationStart, false);
    };
  });
};
```

Some extra resources:

- https://medium.com/@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
- https://stackoverflow.com/questions/11708092/detecting-browser-autofill?page=1&tab=scoredesc#tab-top
- https://github.com/mui/material-ui/issues/22488
- https://github.com/mui/material-ui/issues/14427
- http://webagility.com/posts/the-ultimate-list-of-hacks-for-chromes-forced-yellow-background-on-autocompleted-inputs
- https://stackoverflow.com/questions/22631943/change-font-color-of-autofill-input-field
- https://developer.mozilla.org/en-US/docs/Web/CSS/:has
