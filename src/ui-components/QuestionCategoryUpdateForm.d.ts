/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { QuestionCategory } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type QuestionCategoryUpdateFormInputValues = {
    name?: string;
};
export declare type QuestionCategoryUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuestionCategoryUpdateFormOverridesProps = {
    QuestionCategoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QuestionCategoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: QuestionCategoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    questionCategory?: QuestionCategory;
    onSubmit?: (fields: QuestionCategoryUpdateFormInputValues) => QuestionCategoryUpdateFormInputValues;
    onSuccess?: (fields: QuestionCategoryUpdateFormInputValues) => void;
    onError?: (fields: QuestionCategoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuestionCategoryUpdateFormInputValues) => QuestionCategoryUpdateFormInputValues;
    onValidate?: QuestionCategoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function QuestionCategoryUpdateForm(props: QuestionCategoryUpdateFormProps): React.ReactElement;
