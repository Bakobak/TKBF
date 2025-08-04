/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createPromoteur } from "../graphql/mutations";
const client = generateClient();
export default function PromoteurCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nom: "",
    email: "",
    statut: "",
    dateCreation: "",
    entreprise: "",
  };
  const [nom, setNom] = React.useState(initialValues.nom);
  const [email, setEmail] = React.useState(initialValues.email);
  const [statut, setStatut] = React.useState(initialValues.statut);
  const [dateCreation, setDateCreation] = React.useState(
    initialValues.dateCreation
  );
  const [entreprise, setEntreprise] = React.useState(initialValues.entreprise);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNom(initialValues.nom);
    setEmail(initialValues.email);
    setStatut(initialValues.statut);
    setDateCreation(initialValues.dateCreation);
    setEntreprise(initialValues.entreprise);
    setErrors({});
  };
  const validations = {
    nom: [{ type: "Required" }],
    email: [{ type: "Required" }],
    statut: [{ type: "Required" }],
    dateCreation: [{ type: "Required" }],
    entreprise: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          nom,
          email,
          statut,
          dateCreation,
          entreprise,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createPromoteur.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PromoteurCreateForm")}
      {...rest}
    >
      <TextField
        label="Nom"
        isRequired={true}
        isReadOnly={false}
        value={nom}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nom: value,
              email,
              statut,
              dateCreation,
              entreprise,
            };
            const result = onChange(modelFields);
            value = result?.nom ?? value;
          }
          if (errors.nom?.hasError) {
            runValidationTasks("nom", value);
          }
          setNom(value);
        }}
        onBlur={() => runValidationTasks("nom", nom)}
        errorMessage={errors.nom?.errorMessage}
        hasError={errors.nom?.hasError}
        {...getOverrideProps(overrides, "nom")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nom,
              email: value,
              statut,
              dateCreation,
              entreprise,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <SelectField
        label="Statut"
        placeholder="Please select an option"
        isDisabled={false}
        value={statut}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nom,
              email,
              statut: value,
              dateCreation,
              entreprise,
            };
            const result = onChange(modelFields);
            value = result?.statut ?? value;
          }
          if (errors.statut?.hasError) {
            runValidationTasks("statut", value);
          }
          setStatut(value);
        }}
        onBlur={() => runValidationTasks("statut", statut)}
        errorMessage={errors.statut?.errorMessage}
        hasError={errors.statut?.hasError}
        {...getOverrideProps(overrides, "statut")}
      >
        <option
          children="Actif"
          value="ACTIF"
          {...getOverrideProps(overrides, "statutoption0")}
        ></option>
        <option
          children="Inactif"
          value="INACTIF"
          {...getOverrideProps(overrides, "statutoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Date creation"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={dateCreation && convertToLocal(new Date(dateCreation))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              nom,
              email,
              statut,
              dateCreation: value,
              entreprise,
            };
            const result = onChange(modelFields);
            value = result?.dateCreation ?? value;
          }
          if (errors.dateCreation?.hasError) {
            runValidationTasks("dateCreation", value);
          }
          setDateCreation(value);
        }}
        onBlur={() => runValidationTasks("dateCreation", dateCreation)}
        errorMessage={errors.dateCreation?.errorMessage}
        hasError={errors.dateCreation?.hasError}
        {...getOverrideProps(overrides, "dateCreation")}
      ></TextField>
      <TextField
        label="Entreprise"
        isRequired={false}
        isReadOnly={false}
        value={entreprise}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nom,
              email,
              statut,
              dateCreation,
              entreprise: value,
            };
            const result = onChange(modelFields);
            value = result?.entreprise ?? value;
          }
          if (errors.entreprise?.hasError) {
            runValidationTasks("entreprise", value);
          }
          setEntreprise(value);
        }}
        onBlur={() => runValidationTasks("entreprise", entreprise)}
        errorMessage={errors.entreprise?.errorMessage}
        hasError={errors.entreprise?.hasError}
        {...getOverrideProps(overrides, "entreprise")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
