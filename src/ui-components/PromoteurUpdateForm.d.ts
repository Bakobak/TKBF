/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PromoteurUpdateFormInputValues = {
    nom?: string;
    email?: string;
    statut?: string;
    dateCreation?: string;
    entreprise?: string;
};
export declare type PromoteurUpdateFormValidationValues = {
    nom?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    statut?: ValidationFunction<string>;
    dateCreation?: ValidationFunction<string>;
    entreprise?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PromoteurUpdateFormOverridesProps = {
    PromoteurUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nom?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    statut?: PrimitiveOverrideProps<SelectFieldProps>;
    dateCreation?: PrimitiveOverrideProps<TextFieldProps>;
    entreprise?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PromoteurUpdateFormProps = React.PropsWithChildren<{
    overrides?: PromoteurUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    promoteur?: any;
    onSubmit?: (fields: PromoteurUpdateFormInputValues) => PromoteurUpdateFormInputValues;
    onSuccess?: (fields: PromoteurUpdateFormInputValues) => void;
    onError?: (fields: PromoteurUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PromoteurUpdateFormInputValues) => PromoteurUpdateFormInputValues;
    onValidate?: PromoteurUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PromoteurUpdateForm(props: PromoteurUpdateFormProps): React.ReactElement;
