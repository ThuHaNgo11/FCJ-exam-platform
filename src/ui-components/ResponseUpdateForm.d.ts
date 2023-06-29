/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Response } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ResponseUpdateFormInputValues = {
    data?: string;
};
export declare type ResponseUpdateFormValidationValues = {
    data?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResponseUpdateFormOverridesProps = {
    ResponseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    data?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ResponseUpdateFormProps = React.PropsWithChildren<{
    overrides?: ResponseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    response?: Response;
    onSubmit?: (fields: ResponseUpdateFormInputValues) => ResponseUpdateFormInputValues;
    onSuccess?: (fields: ResponseUpdateFormInputValues) => void;
    onError?: (fields: ResponseUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ResponseUpdateFormInputValues) => ResponseUpdateFormInputValues;
    onValidate?: ResponseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ResponseUpdateForm(props: ResponseUpdateFormProps): React.ReactElement;
