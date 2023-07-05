/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ExamEmail } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ExamEmailUpdateFormInputValues = {
    examLink?: string;
    toAddress?: string;
    fromAddress?: string;
    subject?: string;
    body?: string;
};
export declare type ExamEmailUpdateFormValidationValues = {
    examLink?: ValidationFunction<string>;
    toAddress?: ValidationFunction<string>;
    fromAddress?: ValidationFunction<string>;
    subject?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExamEmailUpdateFormOverridesProps = {
    ExamEmailUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    examLink?: PrimitiveOverrideProps<TextFieldProps>;
    toAddress?: PrimitiveOverrideProps<TextFieldProps>;
    fromAddress?: PrimitiveOverrideProps<TextFieldProps>;
    subject?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExamEmailUpdateFormProps = React.PropsWithChildren<{
    overrides?: ExamEmailUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    examEmail?: ExamEmail;
    onSubmit?: (fields: ExamEmailUpdateFormInputValues) => ExamEmailUpdateFormInputValues;
    onSuccess?: (fields: ExamEmailUpdateFormInputValues) => void;
    onError?: (fields: ExamEmailUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExamEmailUpdateFormInputValues) => ExamEmailUpdateFormInputValues;
    onValidate?: ExamEmailUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ExamEmailUpdateForm(props: ExamEmailUpdateFormProps): React.ReactElement;
