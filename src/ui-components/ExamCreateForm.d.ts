/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ExamCreateFormInputValues = {
    date?: string;
    org?: string;
    data?: string;
};
export declare type ExamCreateFormValidationValues = {
    date?: ValidationFunction<string>;
    org?: ValidationFunction<string>;
    data?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExamCreateFormOverridesProps = {
    ExamCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    org?: PrimitiveOverrideProps<TextFieldProps>;
    data?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExamCreateFormProps = React.PropsWithChildren<{
    overrides?: ExamCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ExamCreateFormInputValues) => ExamCreateFormInputValues;
    onSuccess?: (fields: ExamCreateFormInputValues) => void;
    onError?: (fields: ExamCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExamCreateFormInputValues) => ExamCreateFormInputValues;
    onValidate?: ExamCreateFormValidationValues;
} & React.CSSProperties>;
export default function ExamCreateForm(props: ExamCreateFormProps): React.ReactElement;
