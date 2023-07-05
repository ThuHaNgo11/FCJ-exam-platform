/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ExamEmail } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ExamEmailCreateForm(props) {
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
    examLink: "",
    toAddress: "",
    fromAddress: "",
    subject: "",
    body: "",
  };
  const [examLink, setExamLink] = React.useState(initialValues.examLink);
  const [toAddress, setToAddress] = React.useState(initialValues.toAddress);
  const [fromAddress, setFromAddress] = React.useState(
    initialValues.fromAddress
  );
  const [subject, setSubject] = React.useState(initialValues.subject);
  const [body, setBody] = React.useState(initialValues.body);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setExamLink(initialValues.examLink);
    setToAddress(initialValues.toAddress);
    setFromAddress(initialValues.fromAddress);
    setSubject(initialValues.subject);
    setBody(initialValues.body);
    setErrors({});
  };
  const validations = {
    examLink: [{ type: "Required" }],
    toAddress: [{ type: "Required" }],
    fromAddress: [{ type: "Required" }],
    subject: [{ type: "Required" }],
    body: [{ type: "Required" }],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          examLink,
          toAddress,
          fromAddress,
          subject,
          body,
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
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new ExamEmail(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ExamEmailCreateForm")}
      {...rest}
    >
      <TextField
        label="Exam link"
        isRequired={true}
        isReadOnly={false}
        value={examLink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              examLink: value,
              toAddress,
              fromAddress,
              subject,
              body,
            };
            const result = onChange(modelFields);
            value = result?.examLink ?? value;
          }
          if (errors.examLink?.hasError) {
            runValidationTasks("examLink", value);
          }
          setExamLink(value);
        }}
        onBlur={() => runValidationTasks("examLink", examLink)}
        errorMessage={errors.examLink?.errorMessage}
        hasError={errors.examLink?.hasError}
        {...getOverrideProps(overrides, "examLink")}
      ></TextField>
      <TextField
        label="To address"
        isRequired={true}
        isReadOnly={false}
        value={toAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              examLink,
              toAddress: value,
              fromAddress,
              subject,
              body,
            };
            const result = onChange(modelFields);
            value = result?.toAddress ?? value;
          }
          if (errors.toAddress?.hasError) {
            runValidationTasks("toAddress", value);
          }
          setToAddress(value);
        }}
        onBlur={() => runValidationTasks("toAddress", toAddress)}
        errorMessage={errors.toAddress?.errorMessage}
        hasError={errors.toAddress?.hasError}
        {...getOverrideProps(overrides, "toAddress")}
      ></TextField>
      <TextField
        label="From address"
        isRequired={true}
        isReadOnly={false}
        value={fromAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              examLink,
              toAddress,
              fromAddress: value,
              subject,
              body,
            };
            const result = onChange(modelFields);
            value = result?.fromAddress ?? value;
          }
          if (errors.fromAddress?.hasError) {
            runValidationTasks("fromAddress", value);
          }
          setFromAddress(value);
        }}
        onBlur={() => runValidationTasks("fromAddress", fromAddress)}
        errorMessage={errors.fromAddress?.errorMessage}
        hasError={errors.fromAddress?.hasError}
        {...getOverrideProps(overrides, "fromAddress")}
      ></TextField>
      <TextField
        label="Subject"
        isRequired={true}
        isReadOnly={false}
        value={subject}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              examLink,
              toAddress,
              fromAddress,
              subject: value,
              body,
            };
            const result = onChange(modelFields);
            value = result?.subject ?? value;
          }
          if (errors.subject?.hasError) {
            runValidationTasks("subject", value);
          }
          setSubject(value);
        }}
        onBlur={() => runValidationTasks("subject", subject)}
        errorMessage={errors.subject?.errorMessage}
        hasError={errors.subject?.hasError}
        {...getOverrideProps(overrides, "subject")}
      ></TextField>
      <TextField
        label="Body"
        isRequired={true}
        isReadOnly={false}
        value={body}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              examLink,
              toAddress,
              fromAddress,
              subject,
              body: value,
            };
            const result = onChange(modelFields);
            value = result?.body ?? value;
          }
          if (errors.body?.hasError) {
            runValidationTasks("body", value);
          }
          setBody(value);
        }}
        onBlur={() => runValidationTasks("body", body)}
        errorMessage={errors.body?.errorMessage}
        hasError={errors.body?.hasError}
        {...getOverrideProps(overrides, "body")}
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
