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
export declare type QuestionCategoryCreateFormInputValues = {
    name?: string;
};
export declare type QuestionCategoryCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuestionCategoryCreateFormOverridesProps = {
    QuestionCategoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QuestionCategoryCreateFormProps = React.PropsWithChildren<{
    overrides?: QuestionCategoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: QuestionCategoryCreateFormInputValues) => QuestionCategoryCreateFormInputValues;
    onSuccess?: (fields: QuestionCategoryCreateFormInputValues) => void;
    onError?: (fields: QuestionCategoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuestionCategoryCreateFormInputValues) => QuestionCategoryCreateFormInputValues;
    onValidate?: QuestionCategoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function QuestionCategoryCreateForm(props: QuestionCategoryCreateFormProps): React.ReactElement;
