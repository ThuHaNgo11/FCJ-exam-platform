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
export declare type ResponseCreateFormInputValues = {
    data?: string;
};
export declare type ResponseCreateFormValidationValues = {
    data?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResponseCreateFormOverridesProps = {
    ResponseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    data?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ResponseCreateFormProps = React.PropsWithChildren<{
    overrides?: ResponseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ResponseCreateFormInputValues) => ResponseCreateFormInputValues;
    onSuccess?: (fields: ResponseCreateFormInputValues) => void;
    onError?: (fields: ResponseCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ResponseCreateFormInputValues) => ResponseCreateFormInputValues;
    onValidate?: ResponseCreateFormValidationValues;
} & React.CSSProperties>;
export default function ResponseCreateForm(props: ResponseCreateFormProps): React.ReactElement;
