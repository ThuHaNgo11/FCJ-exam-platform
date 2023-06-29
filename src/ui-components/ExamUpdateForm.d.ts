/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Exam } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ExamUpdateFormInputValues = {
    date?: string;
    org?: string;
    data?: string;
};
export declare type ExamUpdateFormValidationValues = {
    date?: ValidationFunction<string>;
    org?: ValidationFunction<string>;
    data?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExamUpdateFormOverridesProps = {
    ExamUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    org?: PrimitiveOverrideProps<TextFieldProps>;
    data?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExamUpdateFormProps = React.PropsWithChildren<{
    overrides?: ExamUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    exam?: Exam;
    onSubmit?: (fields: ExamUpdateFormInputValues) => ExamUpdateFormInputValues;
    onSuccess?: (fields: ExamUpdateFormInputValues) => void;
    onError?: (fields: ExamUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExamUpdateFormInputValues) => ExamUpdateFormInputValues;
    onValidate?: ExamUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ExamUpdateForm(props: ExamUpdateFormProps): React.ReactElement;
