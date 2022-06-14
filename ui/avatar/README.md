# Avatar

### Using next/image

Some important things to note when using next/image with the wpds avatar component.

- **The next/image expects a pixel value** to be passed into the height and width props. You can find the token to pixel mappings in the [size documentation](https://build.washingtonpost.com/foundations/size).
- In order for the image to fit correctly in the container you need to specify `layout="fixed"`.
- If you're having issues, double check that you're passing in a loader

```jsx
import { Avatar } from "@washingtonpost/wpds-ui-kit";

const myLoader = ({ src }) => {
  return `${src}`;
};

function Component() {
  	<Avatar size="200">
      <img
        src="https://i.pravatar.cc/300"
        alt="An avatar is an atomic component that represents an individual’s identity through a circular photo."
      />
    </Avatar>
    <Avatar>
      <Image
        loader={myLoader}
        src="https://i.pravatar.cc/300"
        width="32" //pixel equivalent of 200 token
        height="32" //pixel equivalent of 200 token
        layout="fixed"
        alt="An avatar is an atomic component that represents an individual’s identity through a circular photo."
      />
    </Avatar>
}
```
