import * as React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import { matchSorter } from "match-sorter";
import {
  Box,
  Button,
  Checkbox,
  Container,
  InputPassword,
  InputText,
  InputTextarea,
  RadioButton,
  RadioGroup,
  Select,
  InputSearch,
  styled,
} from "@washingtonpost/wpds-ui-kit";

import { cities } from "@washingtonpost/wpds-input-search/src/cities";

const STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "MontanaNebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const Headline = styled("h1", {
  paddingTop: "$200",
  color: "$primary",
  fontFamily: "$headline",
  fontSize: "$300",
  lineHeight: "$headline",
});

const SubHeadline = styled("h2", {
  color: "$primary",
  fontWeight: "$light",
  fontSize: "$100",
});

const FormContainer = styled(Container, {
  alignItems: "unset",
  width: "100%",
  display: "flex",
  margin: "30px 0 0 0",
  "@notMd": {
    width: "50%",
  },
});

const Row = styled(Box, {
  display: "flex",
  flexDirection: "row",
  gap: "$100",
  marginBottom: "$100",
});

const InputWrapper = styled("div", {
  flex: 1,
});

type FormInputType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  address2?: string;
  city: string;
  zip: string;
  state: string;
  password: string;
  password2: string;
  notes: string;
  heardOfUs: string;
  correspondence: boolean;
};

const Form = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
    clearErrors,
    watch,
  } = useForm<FormInputType>({});

  const onSubmit = (data: FormInputType) => {
    console.log(data);
  };

  const [checked, setChecked] = useState(false);

  const useCityMatch = (term: string) => {
    return React.useMemo(
      () =>
        term.trim() === ""
          ? null
          : matchSorter(cities, term, {
            keys: [(item) => `${item.city}, ${item.state}`],
          }),
      [term]
    );
  };

  const [term, setTerm] = React.useState("");

  const results: { city: string; state: string }[] | null = useCityMatch(term);

  return (
    <>
      <Headline>Form Example</Headline>
      <SubHeadline>Testing ground / playground</SubHeadline>
      <p>
        This is an example of a form created using our form components with
        validation using react-hook-forms
      </p>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Row>
            <InputWrapper>
              <InputText
                label="First Name"
                id="firstName"
                error={!!errors.firstName}
                errorMessage={errors.firstName?.message}
                required
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "First Name is required",
                  },
                })}
              />
            </InputWrapper>
          </Row>
          <Row>
            <InputWrapper>
              <InputText
                label="Last Name"
                id="lastName"
                error={!!errors.lastName}
                errorMessage={errors.lastName?.message}
                required
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "Last Name is required",
                  },
                })}
              />
            </InputWrapper>
          </Row>
          <Row>
            <InputWrapper>
              <InputText
                label="Email"
                type="email"
                id="email"
                error={!!errors.email}
                errorMessage={errors.email?.message}
                required
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  // eslint-disable-next-line no-useless-escape
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
              />
            </InputWrapper>
          </Row>
          <Row>
            <InputWrapper>
              <InputText
                label="Phone Number"
                type="tel"
                id="phone"
                error={!!errors.phone}
                errorMessage={errors.phone?.message}
                required
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone number is required",
                  },
                  validate: {
                    value: (v: string) =>
                      // passing in US country code because library expects a country code
                      isPossiblePhoneNumber("+1" + v) ||
                      "Please pass in a valid phone number",
                  },
                })}
              />
            </InputWrapper>
          </Row>
          <Row>
            <InputWrapper>
              <InputText
                label="Address"
                id="address"
                error={!!errors.address}
                errorMessage={errors.address?.message}
                required
                {...register("address", {
                  required: { value: true, message: "Address is required" },
                  minLength: {
                    value: 8,
                    message: "Please add a valid address",
                  },
                })}
              />
            </InputWrapper>
          </Row>
          <Row>
            <InputWrapper>
              <InputText
                label="Address 2 (optional)"
                id="address2"
                {...register("address2")}
              />
            </InputWrapper>
          </Row>
          <Row>
            <InputWrapper>
              <InputSearch.Root
                aria-label="City"
                openOnFocus
                onSelect={(value) => {
                  console.log("select?", value);
                  if (value) {
                    clearErrors("city");
                  }
                }}
              >
                <InputSearch.Input
                  id="city"
                  label="City"
                  error={!!errors.city}
                  errorMessage={errors.city?.message}
                  required
                  {...register("city", {
                    required: {
                      value: true,
                      message: "City is required",
                    },
                    minLength: {
                      value: 5,
                      message: "Please add a valid city",
                    },
                    onChange: (event) => {
                      setTerm(event.target.value);
                    },
                  })}
                />
                {results && (
                  <InputSearch.Popover>
                    {results.length > 0 ? (
                      <InputSearch.List>
                        {results.slice(0, 20).map((result) => (
                          <InputSearch.ListItem
                            key={`${result.city.toLowerCase()}, ${result.state.toLowerCase()}`}
                            value={`${result.city}, ${result.state}`}
                          />
                        ))}
                      </InputSearch.List>
                    ) : (
                      <InputSearch.EmptyState />
                    )}
                  </InputSearch.Popover>
                )}
              </InputSearch.Root>
            </InputWrapper>
          </Row>
          <Row>
            <InputWrapper>
              <InputText
                label="Zipcode"
                id="zip"
                error={!!errors.zip}
                errorMessage={errors.zip?.message}
                required
                {...register("zip", {
                  required: { value: true, message: "Zipcode is required" },
                  pattern: {
                    value: /^\d{5,10}(?:[-\s]\d{4})?$/,
                    message: "Zipcode is invalid",
                  },
                })}
              />
            </InputWrapper>
            <InputWrapper>
              <Controller
                name="state"
                control={control}
                rules={{
                  required: { value: true, message: "State is required" },
                }}
                render={({ field }) => (
                  <Select.Root
                    value={field.value}
                    onValueChange={field.onChange}
                    error={!!errors.state}
                    errorMessage={errors.state?.message}
                    required
                  >
                    <Select.Trigger aria-label="State">
                      <Select.Label>State</Select.Label>
                      <Select.Value />
                    </Select.Trigger>
                    <Select.Content>
                      {STATES.map((state) => (
                        <Select.Item value={state} key={state}>
                          {state}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
                )}
              />
            </InputWrapper>
          </Row>
          <Row>
            <InputWrapper>
              <InputPassword
                id="password"
                error={!!errors.password}
                errorMessage={errors.password?.message}
                required
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 5,
                    message:
                      "Passwords should have a minimum length of 5 characters",
                  },
                })}
              />
            </InputWrapper>
          </Row>
          <Row>
            <InputWrapper>
              <InputPassword
                label="Re-enter Password"
                id="password2"
                error={!!errors.password2}
                errorMessage={errors.password2?.message}
                required
                {...register("password2", {
                  required: {
                    value: true,
                    message: "Please re-enter your password",
                  },
                  validate: {
                    value: (v: string) => {
                      if (watch("password") != v) {
                        return "Passwords do not match";
                      }
                    },
                  },
                })}
              />
            </InputWrapper>
          </Row>
          <Row>
            <InputWrapper>
              <InputTextarea label="Notes" id="notes" {...register("notes")} />
            </InputWrapper>
          </Row>
          <Row>
            <InputWrapper>
              <Controller
                name="heardOfUs"
                control={control}
                rules={{
                  required: { value: true, message: "Please select one" },
                }}
                render={({ field }) => (
                  <RadioGroup
                    legend="How did you hear about us?"
                    name="radioGroup"
                    css={{ marginRight: "$050" }}
                    variant="primary"
                    value={field.value}
                    onValueChange={field.onChange}
                    error={!!errors.heardOfUs}
                    errorMessage={errors.heardOfUs?.message}
                    required
                  >
                    <RadioButton label="Instagram" value="opt1" id="opt1" />
                    <RadioButton label="Facebook" value="opt2" id="opt2" />
                    <RadioButton label="Other" value="opt3" id="opt3" />
                  </RadioGroup>
                )}
              />
            </InputWrapper>
          </Row>
          <Row>
            <InputWrapper>
              <Checkbox
                name="correspondence"
                checked={checked}
                css={{ alignItems: "center" }}
                onClick={() => {
                  setChecked(!checked);
                }}
                variant="primary"
                isOutline
                size="125"
                label="Please check this box if you would like to receive communications from the Washington Post. You can always unsubscribe later."
                id="checkbox"
              />
            </InputWrapper>
          </Row>
          <Row>
            <InputWrapper>
              <Button
                variant="secondary"
                css={{ width: "100%" }}
                type="button"
                onClick={() => {
                  reset();
                }}
              >
                Reset Form
              </Button>
            </InputWrapper>
            <InputWrapper>
              <Button variant="cta" css={{ width: "100%" }} type="submit">
                Submit
              </Button>
            </InputWrapper>
          </Row>
        </form>
      </FormContainer>
    </>
  );
};

export default Form;
