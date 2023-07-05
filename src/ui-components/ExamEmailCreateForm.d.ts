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
export declare type ExamEmailCreateFormInputValues = {
    examLink?: string;
    toAddress?: string;
    fromAddress?: string;
    subject?: string;
    body?: string;
};
export declare type ExamEmailCreateFormValidationValues = {
    examLink?: ValidationFunction<string>;
    toAddress?: ValidationFunction<string>;
    fromAddress?: ValidationFunction<string>;
    subject?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExamEmailCreateFormOverridesProps = {
    ExamEmailCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    examLink?: PrimitiveOverrideProps<TextFieldProps>;
    toAddress?: PrimitiveOverrideProps<TextFieldProps>;
    fromAddress?: PrimitiveOverrideProps<TextFieldProps>;
    subject?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExamEmailCreateFormProps = React.PropsWithChildren<{
    overrides?: ExamEmailCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ExamEmailCreateFormInputValues) => ExamEmailCreateFormInputValues;
    onSuccess?: (fields: ExamEmailCreateFormInputValues) => void;
    onError?: (fields: ExamEmailCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExamEmailCreateFormInputValues) => ExamEmailCreateFormInputValues;
    onValidate?: ExamEmailCreateFormValidationValues;
} & React.CSSProperties>;
export default function ExamEmailCreateForm(props: ExamEmailCreateFormProps): React.ReactElement;
