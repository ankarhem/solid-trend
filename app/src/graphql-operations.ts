import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Decimal: any;
  Paging: any;
  Uri: any;
};

export type ActivateExternalCustomerByIdInput = {
  readonly externalCustomerId: Scalars['String'];
};

export type ActivateExternalCustomerByIdResult = {
  readonly __typename?: 'ActivateExternalCustomerByIdResult';
  readonly success: Scalars['Boolean'];
  readonly token?: Maybe<Token>;
};

export type ActivateExternalCustomerByTokenInput = {
  readonly externalCustomerToken: Scalars['String'];
};

export type ActivateExternalCustomerByTokenResult = {
  readonly __typename?: 'ActivateExternalCustomerByTokenResult';
  readonly customer?: Maybe<ExternalCustomer>;
  readonly success: Scalars['Boolean'];
};

export type ActivationStatusSource =
  | 'ACTIVATION_REQUIRED'
  | 'ADDITIONAL_USER_DATA_REQUIRED'
  | 'COUNTRY_NOT_VALID'
  | 'NON_EXISTING_CUSTOMER'
  | 'PREEXISTING_CUSTOMER';

export type AddMultipleToCartInput = {
  readonly articleNumber: Scalars['String'];
  readonly comments?: InputMaybe<ReadonlyArray<InputMaybe<InputComment>>>;
  readonly configurationIds?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  readonly preOrderDate?: InputMaybe<Scalars['DateTime']>;
  /** Default value is 1. */
  readonly quantity?: InputMaybe<Scalars['Int']>;
};

export type AddToCartInput = {
  readonly articleNumber: Scalars['String'];
  /** Not specifying cart id will create new cart. */
  readonly cartId?: InputMaybe<Scalars['String']>;
  readonly comments?: InputMaybe<ReadonlyArray<InputMaybe<InputComment>>>;
  readonly configurationIds?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  readonly preOrderDate?: InputMaybe<Scalars['DateTime']>;
  /** Default value is 1. */
  readonly quantity?: InputMaybe<Scalars['Int']>;
};

export type AddToCustomerProductListInput = {
  readonly articleNumber: Scalars['String'];
  readonly description?: InputMaybe<Scalars['String']>;
  readonly quantity?: InputMaybe<Scalars['Int']>;
};

export type AlternateRoute = {
  readonly __typename?: 'AlternateRoute';
  readonly alias?: Maybe<Scalars['String']>;
  readonly channelId?: Maybe<Scalars['Int']>;
  readonly culture?: Maybe<Scalars['String']>;
  readonly route?: Maybe<Scalars['String']>;
};

export type BoolValue = {
  readonly __typename?: 'BoolValue';
  readonly value?: Maybe<Scalars['Boolean']>;
};

export type BooleanFilter = Filter & {
  readonly __typename?: 'BooleanFilter';
  readonly default?: Maybe<Scalars['Boolean']>;
  readonly id: Scalars['String'];
  readonly name: Scalars['String'];
};

export type BooleanFilterInput = {
  readonly id: Scalars['String'];
  /** null is equivalent to excluding the filter. */
  readonly value?: InputMaybe<Scalars['Boolean']>;
};

export type BusinessCustomer = Customer & {
  readonly __typename?: 'BusinessCustomer';
  readonly billingAddress?: Maybe<CustomerAddress>;
  readonly communication?: Maybe<CustomerCommunication>;
  readonly deliveryAddresses?: Maybe<ReadonlyArray<Maybe<CustomerAddress>>>;
  readonly dynamicContent?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly externalAttributes?: Maybe<ReadonlyArray<Maybe<CustomerExternalAttribute>>>;
  /** Customer id for external system */
  readonly externalId?: Maybe<Scalars['String']>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly googleUserId?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly language?: Maybe<Language>;
  readonly memberId?: Maybe<Scalars['String']>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly orderHeaders?: Maybe<OrderHeaderResult>;
  /** @deprecated Use `organizationNumber` instead. */
  readonly organizationId?: Maybe<Scalars['String']>;
  readonly organizationNumber?: Maybe<Scalars['String']>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly store?: Maybe<Store>;
  /** @deprecated Use communication.acceptsEmail */
  readonly subscribedToNewsletter?: Maybe<Scalars['Boolean']>;
};


export type BusinessCustomerOrderHeadersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Cart = {
  readonly __typename?: 'Cart';
  readonly aggregatedDiscounts?: Maybe<ReadonlyArray<Maybe<Discount>>>;
  readonly discountTotal?: Maybe<Price>;
  readonly externalCheckoutUrl?: Maybe<Scalars['Uri']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly items?: Maybe<ReadonlyArray<Maybe<CartItem>>>;
  readonly productPreviousTotal?: Maybe<Price>;
  readonly productTotal?: Maybe<Price>;
  readonly totalQuantity?: Maybe<Scalars['Int']>;
};

export type CartItem = {
  readonly __typename?: 'CartItem';
  readonly articleNumber: Scalars['String'];
  readonly configurations?: Maybe<ReadonlyArray<Maybe<SelectedProductConfiguration>>>;
  readonly customerComments?: Maybe<ReadonlyArray<Maybe<CartItemComment>>>;
  /** Discount total */
  readonly discount?: Maybe<Price>;
  readonly discounts?: Maybe<ReadonlyArray<Maybe<Discount>>>;
  readonly id: Scalars['String'];
  /** @deprecated Please use images on product instead. */
  readonly images?: Maybe<ReadonlyArray<Maybe<ProductImage>>>;
  readonly preOrderDate?: Maybe<Scalars['DateTime']>;
  /** Total price, excluding discounts */
  readonly previousTotal: Price;
  /** Unit price, excluding discounts */
  readonly previousUnitPrice: Price;
  readonly product?: Maybe<Product>;
  readonly quantity: Scalars['Int'];
  readonly subHeading?: Maybe<Scalars['String']>;
  /** Total price, including discounts */
  readonly total: Price;
  /** Unit price, including discounts */
  readonly unitPrice: Price;
  readonly variant?: Maybe<ProductVariant>;
  readonly variantOptionNames?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type CartItemComment = {
  readonly __typename?: 'CartItemComment';
  readonly name?: Maybe<Scalars['String']>;
  readonly value?: Maybe<Scalars['String']>;
};

export type CartMutation = {
  readonly __typename?: 'CartMutation';
  readonly cart?: Maybe<Cart>;
};

export type Category = Document & {
  readonly __typename?: 'Category';
  /** The time interval of the campaign/category */
  readonly activeDateSpan?: Maybe<CategoryActiveDateSpan>;
  /** When set to false, the category will be excluded from sitemap. The frontend implementation should use this value to set meta tags to exclude the category from being indexed by crawlers. Defaults to true. */
  readonly allowWebIndexing?: Maybe<Scalars['Boolean']>;
  readonly breadcrumbText?: Maybe<Scalars['String']>;
  readonly content?: Maybe<Scalars['String']>;
  /** Get content data set via the Content Editor. NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly data?: Maybe<Content>;
  /** The category's dynamic filtersNB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly dynamicFiltering?: Maybe<ReadonlyArray<Maybe<CategoryDynamicFilter>>>;
  readonly externalDiscountId?: Maybe<Scalars['String']>;
  readonly externalId?: Maybe<Scalars['String']>;
  readonly hasSubcategories?: Maybe<Scalars['Boolean']>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly head?: Maybe<HtmlHead>;
  readonly id: Scalars['Int'];
  readonly images?: Maybe<ReadonlyArray<Maybe<CategoryImage>>>;
  /** A dynamic category has no fixed products; products are dynamically included based on filters defined on the category in Admin. N.B. Products found on a dynamic category has no route that includes said category, instead product.primaryRoute will have to be used. */
  readonly isDynamic: Scalars['Boolean'];
  /**
   * Whether or not this category and all its children are considered hidden
   * @deprecated This field should no longer be used and will always be false.
   */
  readonly isHidden: Scalars['Boolean'];
  readonly level: Scalars['Int'];
  /** When empty will display the value of the name field */
  readonly mainHeader?: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly parent?: Maybe<Category>;
  /** @deprecated Use parent instead */
  readonly parentCategory?: Maybe<Category>;
  /** @deprecated Use parent.id instead */
  readonly parentId?: Maybe<Scalars['Int']>;
  /** The primary route of this Category. NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly primaryRoute?: Maybe<Route>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly products?: Maybe<PagedResult>;
  readonly subcategories?: Maybe<ReadonlyArray<Maybe<Category>>>;
};


export type CategoryProductsArgs = {
  filters?: InputMaybe<FilterInput>;
  first?: InputMaybe<Scalars['Paging']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProductOrderOptions>;
  orderByDirection?: InputMaybe<SortDirection>;
};

export type CategoryActiveDateSpan = {
  readonly __typename?: 'CategoryActiveDateSpan';
  readonly endDate?: Maybe<Scalars['DateTime']>;
  readonly startDate?: Maybe<Scalars['DateTime']>;
};

export type CategoryAutoCompleteResult = {
  readonly __typename?: 'CategoryAutoCompleteResult';
  readonly result?: Maybe<ReadonlyArray<Maybe<Category>>>;
};

export type CategoryDynamicFilter = {
  readonly __typename?: 'CategoryDynamicFilter';
  readonly type?: Maybe<Scalars['String']>;
  readonly value?: Maybe<CategoryDynamicFilterValue>;
};

export type CategoryDynamicFilterValue = BoolValue | ListStringValue | StringValue;

export type CategoryImage = {
  readonly __typename?: 'CategoryImage';
  readonly height?: Maybe<Scalars['Int']>;
  readonly url?: Maybe<Scalars['Uri']>;
  readonly width?: Maybe<Scalars['Int']>;
};

export type CategorySearchResult = {
  readonly __typename?: 'CategorySearchResult';
  readonly result?: Maybe<ReadonlyArray<Maybe<Category>>>;
  readonly totalResults?: Maybe<Scalars['Int']>;
};

export type ChangeByOneItemQuantityInput = {
  readonly cartId: Scalars['String'];
  readonly itemId: Scalars['String'];
};

/** Every channel has its own URL and can have different design, selection of products, prices and own settings for example shipping and payment. */
export type Channel = {
  readonly __typename?: 'Channel';
  readonly countries?: Maybe<ReadonlyArray<Maybe<Country>>>;
  readonly currencies?: Maybe<ReadonlyArray<Maybe<Currency>>>;
  readonly defaultCurrency?: Maybe<Currency>;
  readonly defaultLanguage?: Maybe<Language>;
  readonly displayName?: Maybe<Scalars['String']>;
  readonly groupName?: Maybe<Scalars['String']>;
  readonly id: Scalars['Int'];
  /** The root url of images, this can be used to build image urls if needed. */
  readonly imageUrl?: Maybe<Scalars['String']>;
  readonly isDefault?: Maybe<Scalars['Boolean']>;
  readonly languages?: Maybe<ReadonlyArray<Maybe<Language>>>;
  readonly name?: Maybe<Scalars['String']>;
  /** This channel requires a user to be authorized. */
  readonly requiresAuth?: Maybe<Scalars['Boolean']>;
  readonly settings?: Maybe<ChannelSettings>;
  readonly url?: Maybe<Scalars['Uri']>;
};

export type ChannelSettings = {
  readonly __typename?: 'ChannelSettings';
  readonly countrySettings?: Maybe<ReadonlyArray<Maybe<CountrySettings>>>;
  readonly nostoAccountId?: Maybe<Scalars['String']>;
  readonly pricesIncVat?: Maybe<Scalars['Boolean']>;
  readonly tracking?: Maybe<Tracking>;
};

export type Consent = {
  readonly __typename?: 'Consent';
  readonly id: Scalars['ID'];
  readonly isMandatory?: Maybe<Scalars['Boolean']>;
  readonly linkText?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly page?: Maybe<Page>;
  readonly text?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
};

export type Content = {
  readonly __typename?: 'Content';
  readonly id: Scalars['ID'];
  readonly items?: Maybe<ReadonlyArray<Maybe<ContentItem>>>;
  readonly name?: Maybe<Scalars['String']>;
  readonly tags?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type ContentItem = {
  readonly __typename?: 'ContentItem';
  readonly children?: Maybe<ReadonlyArray<Maybe<ContentItem>>>;
  readonly name?: Maybe<Scalars['String']>;
  readonly properties?: Maybe<ReadonlyArray<Maybe<ContentItemProperty>>>;
  readonly type: Scalars['String'];
};


export type ContentItemPropertiesArgs = {
  getImageAsImageValue?: InputMaybe<Scalars['Boolean']>;
};

export type ContentItemProperty = {
  readonly __typename?: 'ContentItemProperty';
  readonly name: Scalars['String'];
  readonly type: Scalars['String'];
  readonly value?: Maybe<ContentItemPropertyValue>;
  readonly valueType?: Maybe<ContentPropertyValueType>;
};

export type ContentItemPropertyValue = BoolValue | Category | ImageValue | Product | StringValue;

export type ContentPropertyValueType =
  | 'OBJECT'
  | 'SCALAR';

export type Coordinates = {
  readonly __typename?: 'Coordinates';
  readonly latitude: Scalars['Decimal'];
  readonly longitude: Scalars['Decimal'];
};

export type Country = {
  readonly __typename?: 'Country';
  readonly code?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly isDefault?: Maybe<Scalars['Boolean']>;
  readonly name?: Maybe<Scalars['String']>;
};

export type CountrySettings = {
  readonly __typename?: 'CountrySettings';
  /**
   * NB: Carries a performance cost, as asking for this will result in a separate API call in the backend.
   *
   * This will use localization, and will work well when requesting one `channel`, but may give unpredictable results when getting multiple channels via `channels`
   */
  readonly businessCustomerConsents?: Maybe<ReadonlyArray<Maybe<Consent>>>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly businessCustomerFields?: Maybe<ReadonlyArray<Maybe<CustomerField>>>;
  readonly countryCode: Scalars['String'];
  readonly paymentTypes?: Maybe<ReadonlyArray<Maybe<PaymentType>>>;
  /**
   * NB: Carries a performance cost, as asking for this will result in a separate API call in the backend.
   *
   * This will use localization, and will work well when requesting one `channel`, but may give unpredictable results when getting multiple channels via `channels`
   */
  readonly privateCustomerConsents?: Maybe<ReadonlyArray<Maybe<Consent>>>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly privateCustomerFields?: Maybe<ReadonlyArray<Maybe<CustomerField>>>;
  readonly shipping?: Maybe<Shipping>;
};

export type CreateCustomerProductListInput = {
  readonly description?: InputMaybe<Scalars['String']>;
  readonly name: Scalars['String'];
  /** The type of list created. Omit this and the default type will be used. */
  readonly typeId?: InputMaybe<Scalars['Int']>;
};

export type Currency = {
  readonly __typename?: 'Currency';
  readonly format?: Maybe<CurrencyFormat>;
  readonly id: Scalars['String'];
  readonly isDefault?: Maybe<Scalars['Boolean']>;
  readonly name?: Maybe<Scalars['String']>;
};

export type CurrencyFormat = {
  readonly __typename?: 'CurrencyFormat';
  readonly code: Scalars['String'];
  /** @deprecated For currency formatting to a specific culture, instead use whichever culture makes sense contextually. */
  readonly culture: Scalars['String'];
  readonly decimals: Scalars['Int'];
};

export type CustomBoolField = CustomField & {
  readonly __typename?: 'CustomBoolField';
  readonly key?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly type?: Maybe<ProductCustomFieldType>;
  readonly value: Scalars['Boolean'];
};

export type CustomField = {
  readonly key?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly type?: Maybe<ProductCustomFieldType>;
};

export type CustomHtmlField = CustomField & {
  readonly __typename?: 'CustomHtmlField';
  readonly key?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly type?: Maybe<ProductCustomFieldType>;
  readonly value: Scalars['String'];
};

export type CustomItem = {
  readonly __typename?: 'CustomItem';
  readonly content?: Maybe<Scalars['String']>;
  readonly id: Scalars['Int'];
  readonly image?: Maybe<Image>;
  readonly linkUrl?: Maybe<Scalars['Uri']>;
  readonly name: Scalars['String'];
};

export type CustomListField = CustomField & {
  readonly __typename?: 'CustomListField';
  readonly key?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly type?: Maybe<ProductCustomFieldType>;
  readonly value?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type CustomMultiLevelListField = CustomField & {
  readonly __typename?: 'CustomMultiLevelListField';
  readonly items?: Maybe<ReadonlyArray<Maybe<CustomMultiLevelListFieldItem>>>;
  readonly key?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly type?: Maybe<ProductCustomFieldType>;
};

export type CustomMultiLevelListFieldItem = {
  readonly __typename?: 'CustomMultiLevelListFieldItem';
  readonly id: Scalars['Int'];
  readonly parentId?: Maybe<Scalars['Int']>;
  readonly title: Scalars['String'];
  readonly value: Scalars['String'];
};

export type CustomStringField = CustomField & {
  readonly __typename?: 'CustomStringField';
  readonly key?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly type?: Maybe<ProductCustomFieldType>;
  readonly value: Scalars['String'];
};

export type Customer = {
  readonly billingAddress?: Maybe<CustomerAddress>;
  readonly communication?: Maybe<CustomerCommunication>;
  readonly deliveryAddresses?: Maybe<ReadonlyArray<Maybe<CustomerAddress>>>;
  readonly dynamicContent?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly externalAttributes?: Maybe<ReadonlyArray<Maybe<CustomerExternalAttribute>>>;
  /** Customer id for external system */
  readonly externalId?: Maybe<Scalars['String']>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly googleUserId?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly language?: Maybe<Language>;
  readonly memberId?: Maybe<Scalars['String']>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly orderHeaders?: Maybe<OrderHeaderResult>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly store?: Maybe<Store>;
  /** @deprecated Use communication.acceptsEmail */
  readonly subscribedToNewsletter?: Maybe<Scalars['Boolean']>;
};


export type CustomerOrderHeadersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type CustomerAddress = {
  readonly __typename?: 'CustomerAddress';
  readonly addressName?: Maybe<Scalars['String']>;
  readonly city?: Maybe<Scalars['String']>;
  readonly co?: Maybe<Scalars['String']>;
  readonly company?: Maybe<Scalars['String']>;
  readonly companyAtt?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Country>;
  readonly department?: Maybe<Scalars['String']>;
  readonly firstName?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly lastName?: Maybe<Scalars['String']>;
  readonly mobilePhone?: Maybe<Scalars['String']>;
  readonly municipality?: Maybe<Scalars['String']>;
  readonly phone?: Maybe<Scalars['String']>;
  readonly postalCode?: Maybe<Scalars['String']>;
  readonly region?: Maybe<Scalars['String']>;
  readonly streetName?: Maybe<Scalars['String']>;
};

export type CustomerCommunication = {
  readonly __typename?: 'CustomerCommunication';
  readonly acceptsEmail?: Maybe<Scalars['Boolean']>;
  readonly acceptsPostal?: Maybe<Scalars['Boolean']>;
  readonly acceptsSms?: Maybe<Scalars['Boolean']>;
};

export type CustomerExternalAttribute = {
  readonly __typename?: 'CustomerExternalAttribute';
  readonly name: Scalars['String'];
  readonly value: Scalars['String'];
};

export type CustomerField = {
  readonly __typename?: 'CustomerField';
  readonly fields?: Maybe<ReadonlyArray<Maybe<CustomerField>>>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['ID'];
  readonly pattern?: Maybe<Scalars['String']>;
  readonly required: Scalars['Boolean'];
};

export type CustomerLoyalty = {
  readonly __typename?: 'CustomerLoyalty';
  readonly bonusChecks?: Maybe<ReadonlyArray<Maybe<CustomerLoyaltyBonusCheck>>>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly bonusPoints?: Maybe<CustomerLoyaltyBonusPoints>;
  readonly discounts?: Maybe<ReadonlyArray<Maybe<CustomerLoyaltyDiscount>>>;
  readonly pointCards?: Maybe<ReadonlyArray<Maybe<CustomerLoyaltyPointCard>>>;
};


export type CustomerLoyaltyDiscountsArgs = {
  includeRedeemed?: Scalars['Boolean'];
};

export type CustomerLoyaltyBonusCheck = {
  readonly __typename?: 'CustomerLoyaltyBonusCheck';
  /** For display purposes, not guaranteed to match up with a currency on the channel. */
  readonly currency?: Maybe<Scalars['String']>;
  readonly endDate?: Maybe<Scalars['DateTime']>;
  readonly externalId?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly redeemed?: Maybe<Scalars['Boolean']>;
  readonly redeemedOn?: Maybe<Scalars['DateTime']>;
  readonly startDate?: Maybe<Scalars['DateTime']>;
  readonly value?: Maybe<Scalars['Decimal']>;
};

export type CustomerLoyaltyBonusPoints = {
  readonly __typename?: 'CustomerLoyaltyBonusPoints';
  readonly points?: Maybe<Scalars['Int']>;
};

export type CustomerLoyaltyDiscount = {
  readonly __typename?: 'CustomerLoyaltyDiscount';
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly category?: Maybe<Category>;
  readonly description?: Maybe<Scalars['String']>;
  readonly discountCode?: Maybe<Scalars['String']>;
  readonly endDate?: Maybe<Scalars['DateTime']>;
  readonly externalData?: Maybe<CustomerLoyaltyDiscountOfferExternalData>;
  readonly isActivatedByDiscountCode: Scalars['Boolean'];
  readonly name?: Maybe<Scalars['String']>;
  readonly startDate?: Maybe<Scalars['DateTime']>;
};

export type CustomerLoyaltyDiscountOfferExternalData = {
  readonly __typename?: 'CustomerLoyaltyDiscountOfferExternalData';
  readonly description?: Maybe<Scalars['String']>;
  readonly endDate?: Maybe<Scalars['DateTime']>;
  readonly externalId?: Maybe<Scalars['String']>;
  readonly externalReference?: Maybe<Scalars['String']>;
  readonly heading?: Maybe<Scalars['String']>;
  readonly imageUrl?: Maybe<Scalars['String']>;
  readonly link?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly redeemed?: Maybe<Scalars['Boolean']>;
  readonly redeemedOn?: Maybe<Scalars['DateTime']>;
  readonly startDate?: Maybe<Scalars['DateTime']>;
};

export type CustomerLoyaltyPointCard = {
  readonly __typename?: 'CustomerLoyaltyPointCard';
  readonly externalId?: Maybe<Scalars['String']>;
  readonly isActive?: Maybe<Scalars['Boolean']>;
  readonly lastStampTime?: Maybe<Scalars['DateTime']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly numberOfSlots?: Maybe<Scalars['Int']>;
  readonly numberOfSlotsRemaining?: Maybe<Scalars['Int']>;
};

export type CustomerProductList = {
  readonly __typename?: 'CustomerProductList';
  readonly description?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly items?: Maybe<ReadonlyArray<Maybe<CustomerProductListItem>>>;
  readonly name?: Maybe<Scalars['String']>;
  readonly shareToken?: Maybe<Scalars['String']>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly type?: Maybe<CustomerProductListType>;
};

export type CustomerProductListItem = {
  readonly __typename?: 'CustomerProductListItem';
  readonly description?: Maybe<Scalars['String']>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly product?: Maybe<Product>;
  readonly quantity?: Maybe<Scalars['Int']>;
  readonly variant?: Maybe<ProductVariant>;
};

export type CustomerProductListResult = {
  readonly __typename?: 'CustomerProductListResult';
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly customerProductList?: Maybe<CustomerProductList>;
  readonly success?: Maybe<Scalars['Boolean']>;
};

export type CustomerProductListType = {
  readonly __typename?: 'CustomerProductListType';
  readonly id: Scalars['ID'];
  readonly name?: Maybe<Scalars['String']>;
};

export type CustomerType =
  | 'COMPANY'
  | 'PRIVATE';

/** Fields that are required to have a value is determined by CustomerFields found in CountrySettings */
export type CustomerUpdateBillingAddressInput = {
  readonly addressName?: InputMaybe<Scalars['String']>;
  readonly city?: InputMaybe<Scalars['String']>;
  readonly co?: InputMaybe<Scalars['String']>;
  readonly company?: InputMaybe<Scalars['String']>;
  readonly companyAtt?: InputMaybe<Scalars['String']>;
  readonly countryCode?: InputMaybe<Scalars['String']>;
  readonly department?: InputMaybe<Scalars['String']>;
  readonly firstName?: InputMaybe<Scalars['String']>;
  readonly lastName?: InputMaybe<Scalars['String']>;
  readonly mobilePhone?: InputMaybe<Scalars['String']>;
  readonly municipality?: InputMaybe<Scalars['String']>;
  readonly phone?: InputMaybe<Scalars['String']>;
  readonly postalCode?: InputMaybe<Scalars['String']>;
  readonly region?: InputMaybe<Scalars['String']>;
  readonly streetName?: InputMaybe<Scalars['String']>;
};

export type CustomerUpdateConsentInput = {
  readonly id?: InputMaybe<Scalars['String']>;
  readonly value?: InputMaybe<Scalars['Boolean']>;
};

export type CustomerUpdateDeliveryAddressInput = {
  readonly addressName?: InputMaybe<Scalars['String']>;
  readonly city?: InputMaybe<Scalars['String']>;
  readonly co?: InputMaybe<Scalars['String']>;
  readonly company?: InputMaybe<Scalars['String']>;
  readonly companyAtt?: InputMaybe<Scalars['String']>;
  readonly countryCode?: InputMaybe<Scalars['String']>;
  readonly department?: InputMaybe<Scalars['String']>;
  readonly firstName?: InputMaybe<Scalars['String']>;
  /** If this field is left empty, a new DeliveryAddress will be created. */
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly lastName?: InputMaybe<Scalars['String']>;
  readonly mobilePhone?: InputMaybe<Scalars['String']>;
  readonly municipality?: InputMaybe<Scalars['String']>;
  readonly phone?: InputMaybe<Scalars['String']>;
  readonly postalCode?: InputMaybe<Scalars['String']>;
  readonly region?: InputMaybe<Scalars['String']>;
  readonly streetName?: InputMaybe<Scalars['String']>;
};

export type CustomerUpdateExternalAttribute = {
  readonly name: Scalars['String'];
  readonly value: Scalars['String'];
};

export type CustomerUpdateInput = {
  readonly billingAddress: CustomerUpdateBillingAddressInput;
  readonly consents?: InputMaybe<ReadonlyArray<InputMaybe<CustomerUpdateConsentInput>>>;
  readonly deliveryAddresses?: InputMaybe<ReadonlyArray<InputMaybe<CustomerUpdateDeliveryAddressInput>>>;
  readonly dynamicContent?: InputMaybe<Scalars['String']>;
  readonly externalAttributes?: InputMaybe<ReadonlyArray<InputMaybe<CustomerUpdateExternalAttribute>>>;
  readonly organizationNumber?: InputMaybe<Scalars['String']>;
  readonly pid?: InputMaybe<Scalars['String']>;
  readonly preferences?: InputMaybe<CustomerUpdatePreferenceInput>;
};

export type CustomerUpdatePreferenceInput = {
  readonly storeLocationId?: InputMaybe<Scalars['Int']>;
  readonly type?: InputMaybe<CustomerUpdatePreferencesCommunicationInput>;
};

export type CustomerUpdatePreferencesCommunicationInput = {
  readonly acceptsEmail?: InputMaybe<Scalars['Boolean']>;
  readonly acceptsPostal?: InputMaybe<Scalars['Boolean']>;
  readonly acceptsSms?: InputMaybe<Scalars['Boolean']>;
  readonly culture?: InputMaybe<Scalars['String']>;
};

/** Responds with a bool value whether the update has been successful or not */
export type CustomerUpdateResponse = {
  readonly __typename?: 'CustomerUpdateResponse';
  readonly success: Scalars['Boolean'];
};

export type DeleteCustomerProductListResult = {
  readonly __typename?: 'DeleteCustomerProductListResult';
  readonly success?: Maybe<Scalars['Boolean']>;
};

export type Discount = {
  readonly __typename?: 'Discount';
  readonly campaign?: Maybe<Category>;
  readonly description?: Maybe<Scalars['String']>;
  readonly externalId?: Maybe<Scalars['ID']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly type?: Maybe<DiscountType>;
  readonly value?: Maybe<Price>;
};

export type DiscountType =
  /** Discount on the order total from a voucher */
  | 'BONUS_VOUCHER_DISCOUNT'
  /** Discount allows to buy amount of X of the article, but pay only for amount of Y */
  | 'BUY_X_ARTICLES_PAY_Y_AMOUNT'
  /** Discount drops price of the order total by defined amount */
  | 'FIXED_AMOUNT'
  /** Discount allows to get a free gift when the product is added */
  | 'FREE_PRODUCT'
  /** Discount allows to get free shipping option for the product */
  | 'FREE_SHIPPING'
  /** Discount will get the amount of the cheapest product and use this as a discount */
  | 'ITEMS'
  /** Discount drops total price of the product if there is at least X of them in cart */
  | 'ITEMS_PERCENTAGE_LIMIT'
  /** Only a collection of products */
  | 'ONLY_USE_LANDING_PAGE'
  /** Discount drops price for the package when all products in the package is added to cart */
  | 'PACKAGE_DISCOUNT'
  /** Discount drops price of the product by X % */
  | 'PERCENT'
  /** Discount drops price of the least expensive product in cart */
  | 'PERCENT_ON_LEAST_EXPENSIVE_ITEM'
  /** Discount drops price of the most expensive product in cart */
  | 'PERCENT_ON_MOST_EXPENSIVE_ITEM'
  /** No discount defined */
  | 'UNDEFINED';

export type Document = {
  readonly breadcrumbText?: Maybe<Scalars['String']>;
  readonly head?: Maybe<HtmlHead>;
  readonly primaryRoute?: Maybe<Route>;
};

export type ExternalCustomer = {
  readonly __typename?: 'ExternalCustomer';
  readonly address?: Maybe<MaskedProperty>;
  readonly city?: Maybe<MaskedProperty>;
  readonly co?: Maybe<MaskedProperty>;
  readonly country?: Maybe<MaskedProperty>;
  readonly countryCode?: Maybe<Scalars['String']>;
  readonly email?: Maybe<MaskedProperty>;
  readonly externalId?: Maybe<Scalars['String']>;
  readonly firstName?: Maybe<MaskedProperty>;
  readonly lastName?: Maybe<MaskedProperty>;
  readonly mobilePhoneNumber?: Maybe<MaskedProperty>;
  readonly phoneNumber?: Maybe<MaskedProperty>;
  readonly pid?: Maybe<MaskedProperty>;
  readonly postalCode?: Maybe<MaskedProperty>;
};

/**
 * The activation status has 4 states;
 * PREEXISTING_CUSTOMER: No customer info will be returned and the customer is advised to login to the preexisting account.
 * ACTIVATION_REQUIRED: The customer account needs to be activated. Email (masked), FirstName (masked) and externalId will be the only fields set on `customer`.
 * ADDITIONAL_USER_DATA_REQUIRED: Additional data needed to register the customer, the existing customer info will be available with masking on customer.
 * NON_EXISTING_CUSTOMER: Customer does not exist in any system and will have to do a sign up.
 * COUNTRY_NOT_VALID: The customer account may not be activated on this channel as it's missing the customer country. Email (masked), FirstName (masked), externalId and countryCode will be the only fields set on `customer`.
 *
 *
 */
export type ExternalCustomerResult = {
  readonly __typename?: 'ExternalCustomerResult';
  readonly customer?: Maybe<ExternalCustomer>;
  readonly status?: Maybe<ActivationStatusSource>;
};

export type FacebookConversionsApi = {
  readonly __typename?: 'FacebookConversionsApi';
  readonly accessToken?: Maybe<Scalars['String']>;
  readonly pixelId?: Maybe<Scalars['String']>;
};

export type Filter = {
  readonly id: Scalars['String'];
  readonly name: Scalars['String'];
};

export type FilterInput = {
  readonly booleanFilters?: InputMaybe<ReadonlyArray<InputMaybe<BooleanFilterInput>>>;
  readonly listFilters?: InputMaybe<ReadonlyArray<InputMaybe<ListFilterInput>>>;
  readonly multiListFilters?: InputMaybe<ReadonlyArray<InputMaybe<MultiListFilterInput>>>;
  readonly rangeFilters?: InputMaybe<ReadonlyArray<InputMaybe<RangeFilterInput>>>;
};

export type FreeShippingLimit = {
  readonly __typename?: 'FreeShippingLimit';
  readonly exVat?: Maybe<Scalars['Decimal']>;
  readonly incVat?: Maybe<Scalars['Decimal']>;
};

export type GoogleAnalytics = {
  readonly __typename?: 'GoogleAnalytics';
  readonly trackingId?: Maybe<Scalars['String']>;
  readonly useArticleNumberAsId?: Maybe<Scalars['Boolean']>;
};

export type GoogleTagManager = {
  readonly __typename?: 'GoogleTagManager';
  readonly containerId?: Maybe<Scalars['String']>;
};

export type HtmlHead = {
  readonly __typename?: 'HtmlHead';
  readonly metaTags?: Maybe<ReadonlyArray<Maybe<HtmlMetaTag>>>;
  readonly title?: Maybe<Scalars['String']>;
};

export type HtmlMetaTag = {
  readonly __typename?: 'HtmlMetaTag';
  readonly content?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
};

export type Image = {
  readonly __typename?: 'Image';
  readonly height?: Maybe<Scalars['Int']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly url?: Maybe<Scalars['Uri']>;
  readonly width?: Maybe<Scalars['Int']>;
};

export type ImageValue = {
  readonly __typename?: 'ImageValue';
  readonly focalPointX?: Maybe<Scalars['Int']>;
  readonly focalPointY?: Maybe<Scalars['Int']>;
  readonly value?: Maybe<Scalars['String']>;
};

export type InputComment = {
  readonly name: Scalars['String'];
  readonly value?: InputMaybe<Scalars['String']>;
};

export type Language = {
  readonly __typename?: 'Language';
  readonly culture: Scalars['String'];
  readonly id: Scalars['String'];
  readonly isDefault?: Maybe<Scalars['Boolean']>;
  readonly name: Scalars['String'];
};

export type Link = {
  readonly __typename?: 'Link';
  readonly link?: Maybe<Scalars['Uri']>;
  readonly target?: Maybe<Scalars['String']>;
};

export type ListFilter = Filter & {
  readonly __typename?: 'ListFilter';
  readonly id: Scalars['String'];
  readonly items: ReadonlyArray<Maybe<ListFilterItem>>;
  readonly name: Scalars['String'];
};

export type ListFilterInput = {
  readonly id: Scalars['String'];
  readonly values?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type ListFilterItem = {
  readonly __typename?: 'ListFilterItem';
  readonly id: Scalars['String'];
  readonly resultCount?: Maybe<Scalars['Int']>;
  readonly text: Scalars['String'];
  readonly value: Scalars['String'];
};

export type ListStringValue = {
  readonly __typename?: 'ListStringValue';
  readonly value?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type LoginExternalCustomerInput = {
  readonly externalCustomerToken: Scalars['String'];
};

export type LoginExternalCustomerResult = {
  readonly __typename?: 'LoginExternalCustomerResult';
  readonly token?: Maybe<Token>;
};

/** The response will contain a authorization token if the login was successful */
export type LoginResponse = {
  readonly __typename?: 'LoginResponse';
  readonly token: Token;
};

export type MaskedProperty = {
  readonly __typename?: 'MaskedProperty';
  readonly encrypted?: Maybe<Scalars['String']>;
  readonly masked?: Maybe<Scalars['String']>;
};

export type MultiListFilter = Filter & {
  readonly __typename?: 'MultiListFilter';
  readonly id: Scalars['String'];
  readonly lists: ReadonlyArray<Maybe<MultiListFilterList>>;
  readonly name: Scalars['String'];
};

export type MultiListFilterInput = {
  readonly id: Scalars['String'];
  readonly values?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type MultiListFilterList = {
  readonly __typename?: 'MultiListFilterList';
  readonly id: Scalars['String'];
  readonly items: ReadonlyArray<Maybe<ListFilterItem>>;
  readonly name: Scalars['String'];
};

export type MultipleContent = {
  readonly __typename?: 'MultipleContent';
  readonly content: ReadonlyArray<Maybe<Content>>;
  readonly notFoundIds: ReadonlyArray<Maybe<Scalars['ID']>>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  /** Error codes: CustomerNotFound, CustomerAlreadyActivated, UnableToActivateCustomer, UnableToLoginCustomer, InvalidCustomerActivateInput */
  readonly activateExternalCustomerById?: Maybe<ActivateExternalCustomerByIdResult>;
  /** Error codes: CustomerNotFound, CustomerAlreadyActivated, UnableToActivateCustomer, UnableToLoginCustomer, InvalidCustomerActivateInput */
  readonly activateExternalCustomerByToken?: Maybe<ActivateExternalCustomerByTokenResult>;
  /** Adds products to the cart where you can add comments to the products and determine their quantities. Replies with the affected cart if a cartId has been presented, otherwise a new cart will be created.  */
  readonly addMultipleToCart?: Maybe<CartMutation>;
  /** Adds a product to the cart where you can add a comment to the product and determine the quantity. Replies with the affected cart if a cartId has been presented, otherwise a new cart will be created.  */
  readonly addToCart?: Maybe<CartMutation>;
  /**
   * ## Description
   * Adds items to product list, null id adds items to the default product list.
   * ## Error Codes
   * ### Unauthorized
   * Unauthorized
   * ### AddToProductListFailed
   * Error in underlying API call, more info may be contained in the error message.
   * ### InvalidArticleNumber
   * Article number cannot be empty
   * ### ProductNotFound
   * No match on article number
   * ### MoreThanOneMatchOnArticleNumber
   * Article number matched more than one article
   *
   */
  readonly addToCustomerProductList?: Maybe<CustomerProductListResult>;
  /**
   * ## Description
   * Creates a product list for a logged in customer
   * ## Error Codes
   * ### Unauthorized
   *
   * ### UnableToCreateProductList
   * Error in underlying API call, more info may be contained in the error message.
   *
   */
  readonly createCustomerProductList?: Maybe<CustomerProductListResult>;
  /** This mutation is used to reduce the quantity of a product in the cart, replies with the affected cart ruled by the cartId in the input. */
  readonly decrementItemQuantity?: Maybe<CartMutation>;
  /** This mutation deletes a customer. An authorization token is needed in the request, in order to be able to delete the customer. */
  readonly deleteCustomer?: Maybe<Scalars['Boolean']>;
  /**
   * ## Description
   * Deletes a product list for a logged in customer
   * ## Error Codes
   * ### Unauthorized
   *
   * ### ProductListNotFound
   * Argument `id` did not match any list for this customer.
   * ### UnableToDeleteProductList
   * Error in underlying API call, more info may be contained in the error message.
   *
   */
  readonly deleteCustomerProductList?: Maybe<DeleteCustomerProductListResult>;
  /** This mutation is used to increase the quantity of a product in the cart, replies with the affected cart ruled by the cartId in the input */
  readonly incrementItemQuantity?: Maybe<CartMutation>;
  /**
   * LoginMutation will log a user in.
   * One of email, pid, externalId, memberNumber or customerId is required, along with a password.
   * Returns an authorization token if the login was successful.
   */
  readonly login?: Maybe<LoginResponse>;
  readonly loginExternalCustomer?: Maybe<LoginExternalCustomerResult>;
  /** Removes a specific product in the cart, replies with the affected cart */
  readonly removeFromCart?: Maybe<CartMutation>;
  /**
   * ## Description
   * Removes an item from a product list for a logged in customer, null id removes item in the default product list.
   * ## Error Codes
   * ### Unauthorized
   *
   * ### ProductListNotFound
   * Argument `id` did not match any list for this customer.
   * ### RemoveFromProductListFailed
   * Error in underlying API call, more info may be contained in the error message.
   * ### ProductNotFound
   * Argument `articleNumbers` did not match any products or variants.
   * ### MoreThanOneMatchOnArticleNumber
   * Argument `articleNumbers` matched more than one product/variant.
   * ### InvalidArticleNumber
   * Argument `articleNumbers` cannot be null or empty.
   *
   */
  readonly removeFromCustomerProductList?: Maybe<CustomerProductListResult>;
  /** Removes specific items from the cart, replies with the affected cart */
  readonly removeMultipleFromCart?: Maybe<CartMutation>;
  /** Requires a valid email and returns boolean value if successful, otherwise an error will be thrown */
  readonly requestPasswordReset?: Maybe<RequestPasswordResetResult>;
  /** Requires a valid resetPasswordToken and a new password and if successful will return a authentication token */
  readonly resetPassword?: Maybe<ResetPassword>;
  /** Used to add a specific quantity to a product in the cart. Replies with the affected cart ruled by the cartId in the input */
  readonly setItemQuantity?: Maybe<CartMutation>;
  /**
   * The SignUp-mutation is used for creating a customer.
   *
   * If the sign up is successful the customer may be considered to be logged on and an authentication token will be returned
   */
  readonly signUp?: Maybe<SignUpResponse>;
  /**
   * This mutation's purpose is to subscribe a customer to a newsletter. In order to subscribe a customer a valid email address is required
   *
   * Responds with a boolean value whether the subscription has been successful or not
   */
  readonly subscribeToNewsletter?: Maybe<Scalars['Boolean']>;
  readonly subscribeToStockNotifications?: Maybe<Scalars['Boolean']>;
  /** Responds with the affected cart. */
  readonly updateCart?: Maybe<UpdateCartMutation>;
  /** This mutation's purpose is to update a existing customer's information. An authorization token is needed in the request, in order to be able to update the customer. */
  readonly updateCustomer?: Maybe<CustomerUpdateResponse>;
  /**
   * ## Description
   * This mutation's purpose is to update a existing customer's group using an access code. An authorization token is needed in the request, in order to be able to update the customer.
   * ## Error Codes
   * ### Unauthorized
   * Unauthorized
   * ### UnableToUpdateCustomer
   * Error in underlying API call, more info may be contained in the error message.
   * ### CustomerAlreadyUpdated
   * Customer already in the customer group
   * ### CustomerNotFound
   * No match on customer with access code
   *
   */
  readonly updateCustomerGroup?: Maybe<UpdateCustomerGroupResult>;
  /** This mutation's purpose is to update a existing customer's price list using an access code. An authorization token is needed in the request, in order to be able to update the customer. */
  readonly updateCustomerPriceList?: Maybe<UpdateCustomerPriceListResult>;
  /**
   * ## Description
   * Updates a product list for a logged in customer
   * ## Error Codes
   * ### Unauthorized
   *
   * ### ProductListNotFound
   * Argument `id` did not match any list for this customer.
   * ### UnableToUpdateProductList
   * Error in underlying API call, more info may be contained in the error message.
   *
   */
  readonly updateCustomerProductList?: Maybe<CustomerProductListResult>;
  /**
   * ## Description
   * Updates an item in product list, null id updates item in the default product list.
   * ## Error Codes
   * ### Unauthorized
   *
   * ### ProductListNotFound
   * Argument `id` did not match any list for this customer.
   * ### UnableToUpdateProductListItem
   * Error in underlying API call, more info may be contained in the error message.
   * ### ProductNotFound
   * Argument `articleNumber` did not match any products or variants.
   * ### MoreThanOneMatchOnArticleNumber
   * Argument `articleNumber` matched more than one product/variant.
   * ### InvalidArticleNumber
   * Argument `articleNumber` cannot be null or empty.
   *
   */
  readonly updateCustomerProductListItem?: Maybe<CustomerProductListResult>;
  /** The updatePassword mutation updates the customers password. Both the old password and a new password is a requirement. */
  readonly updatePassword?: Maybe<UpdatePasswordResult>;
};


export type MutationActivateExternalCustomerByIdArgs = {
  input?: InputMaybe<ActivateExternalCustomerByIdInput>;
};


export type MutationActivateExternalCustomerByTokenArgs = {
  input?: InputMaybe<ActivateExternalCustomerByTokenInput>;
};


export type MutationAddMultipleToCartArgs = {
  cartId?: InputMaybe<Scalars['String']>;
  items: ReadonlyArray<InputMaybe<AddMultipleToCartInput>>;
};


export type MutationAddToCartArgs = {
  input: AddToCartInput;
};


export type MutationAddToCustomerProductListArgs = {
  id?: InputMaybe<Scalars['ID']>;
  items: ReadonlyArray<AddToCustomerProductListInput>;
};


export type MutationCreateCustomerProductListArgs = {
  input: CreateCustomerProductListInput;
};


export type MutationDecrementItemQuantityArgs = {
  input: ChangeByOneItemQuantityInput;
};


export type MutationDeleteCustomerProductListArgs = {
  id: Scalars['ID'];
};


export type MutationIncrementItemQuantityArgs = {
  input: ChangeByOneItemQuantityInput;
};


export type MutationLoginArgs = {
  customerId?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  externalHashId?: InputMaybe<Scalars['String']>;
  externalId?: InputMaybe<Scalars['String']>;
  memberNumber?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  pid?: InputMaybe<Scalars['String']>;
  timeStamp?: InputMaybe<Scalars['String']>;
};


export type MutationLoginExternalCustomerArgs = {
  input?: InputMaybe<LoginExternalCustomerInput>;
};


export type MutationRemoveFromCartArgs = {
  input: RemoveFromCartInput;
};


export type MutationRemoveFromCustomerProductListArgs = {
  articleNumbers?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationRemoveMultipleFromCartArgs = {
  input: RemoveMultipleFromCartInput;
};


export type MutationRequestPasswordResetArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  newPassword: Scalars['String'];
  resetPasswordToken: Scalars['String'];
};


export type MutationSetItemQuantityArgs = {
  input: SetItemQuantityInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationSubscribeToNewsletterArgs = {
  email: Scalars['String'];
};


export type MutationSubscribeToStockNotificationsArgs = {
  articleNumber: Scalars['String'];
  email: Scalars['String'];
};


export type MutationUpdateCartArgs = {
  input: UpdateCartInput;
};


export type MutationUpdateCustomerArgs = {
  input: CustomerUpdateInput;
};


export type MutationUpdateCustomerGroupArgs = {
  customerGroupAccessCode: Scalars['String'];
};


export type MutationUpdateCustomerPriceListArgs = {
  priceListAccessCode: Scalars['String'];
};


export type MutationUpdateCustomerProductListArgs = {
  input: UpdateCustomerProductListInput;
};


export type MutationUpdateCustomerProductListItemArgs = {
  input: UpdateCustomerProductListItemInput;
};


export type MutationUpdatePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type MyPagesContent = {
  readonly __typename?: 'MyPagesContent';
  /** Text that will show on the landing page on MyPages */
  readonly welcomeText?: Maybe<Scalars['String']>;
};

export type NumericRangeFilter = Filter & {
  readonly __typename?: 'NumericRangeFilter';
  readonly id: Scalars['String'];
  readonly max: Scalars['Decimal'];
  readonly min: Scalars['Decimal'];
  readonly name: Scalars['String'];
};

export type Order = {
  readonly __typename?: 'Order';
  readonly attachments?: Maybe<ReadonlyArray<Maybe<OrderAttachment>>>;
  readonly billingInfo?: Maybe<OrderInfo>;
  readonly currency?: Maybe<Currency>;
  readonly deliveryInfo?: Maybe<OrderInfo>;
  readonly deliveryMethod?: Maybe<OrderDeliveryMethod>;
  readonly giftVouchers?: Maybe<ReadonlyArray<Maybe<OrderGiftVoucher>>>;
  readonly id: Scalars['ID'];
  readonly items?: Maybe<ReadonlyArray<Maybe<OrderItem>>>;
  readonly orderDate?: Maybe<Scalars['DateTime']>;
  readonly orderNumber?: Maybe<Scalars['String']>;
  readonly orderPurchaseLocation?: Maybe<Scalars['String']>;
  readonly paymentMethod?: Maybe<OrderPaymentMethod>;
  readonly status?: Maybe<OrderStatus>;
  readonly total?: Maybe<Price>;
};


export type OrderItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type OrderAddress = {
  readonly __typename?: 'OrderAddress';
  readonly city?: Maybe<Scalars['String']>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly country?: Maybe<Country>;
  readonly postcode?: Maybe<Scalars['String']>;
  readonly region?: Maybe<Scalars['String']>;
  readonly street?: Maybe<Scalars['String']>;
};

export type OrderAttachment = {
  readonly __typename?: 'OrderAttachment';
  readonly id: Scalars['ID'];
  readonly url?: Maybe<Scalars['String']>;
};

export type OrderDeliveryMethod = {
  readonly __typename?: 'OrderDeliveryMethod';
  readonly fee?: Maybe<Price>;
  readonly name?: Maybe<Scalars['String']>;
  readonly tracking?: Maybe<OrderDeliveryMethodTracking>;
};

export type OrderDeliveryMethodTracking = {
  readonly __typename?: 'OrderDeliveryMethodTracking';
  readonly trackingUrl?: Maybe<Scalars['String']>;
  readonly trackingUrlText?: Maybe<Scalars['String']>;
};

export type OrderGiftVoucher = {
  readonly __typename?: 'OrderGiftVoucher';
  readonly amount?: Maybe<Scalars['Decimal']>;
  readonly charged?: Maybe<Scalars['Decimal']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly validUntil?: Maybe<Scalars['DateTime']>;
};

export type OrderHeader = {
  readonly __typename?: 'OrderHeader';
  readonly currency?: Maybe<Currency>;
  /** If this is false, a call to `order` for this order will result in a failure. */
  readonly hasOrderDetails?: Maybe<Scalars['Boolean']>;
  readonly id: Scalars['ID'];
  readonly orderDate?: Maybe<Scalars['DateTime']>;
  readonly orderNumber?: Maybe<Scalars['String']>;
  readonly status?: Maybe<OrderStatus>;
  readonly statusTimeline?: Maybe<ReadonlyArray<Maybe<OrderStatus>>>;
  readonly total?: Maybe<Price>;
  readonly trackingId?: Maybe<Scalars['String']>;
};

export type OrderHeaderResult = {
  readonly __typename?: 'OrderHeaderResult';
  readonly result?: Maybe<ReadonlyArray<Maybe<OrderHeader>>>;
  readonly totalResults?: Maybe<Scalars['Int']>;
};

export type OrderInfo = {
  readonly __typename?: 'OrderInfo';
  readonly address?: Maybe<OrderAddress>;
  readonly company?: Maybe<Scalars['String']>;
  readonly firstName?: Maybe<Scalars['String']>;
  readonly lastName?: Maybe<Scalars['String']>;
  readonly phone?: Maybe<Scalars['String']>;
};

export type OrderItem = {
  readonly __typename?: 'OrderItem';
  readonly articleNumber?: Maybe<Scalars['String']>;
  readonly discounts?: Maybe<ReadonlyArray<Maybe<OrderItemDiscount>>>;
  /** Name of the Product at the time the order was placed (may since have changed). Use this as a fallback if the 'product' field itself is null.  */
  readonly name?: Maybe<Scalars['String']>;
  readonly preOrderDate?: Maybe<Scalars['DateTime']>;
  /** N.B. this may be null if the Product has since been removed. */
  readonly product?: Maybe<Product>;
  readonly quantity?: Maybe<Scalars['Int']>;
  readonly total?: Maybe<Price>;
  readonly unitPrice?: Maybe<Price>;
  /** N.B. this may be null if the Product itself or the Variant has since been removed. */
  readonly variant?: Maybe<ProductVariant>;
  /** N.B. this may be null if the Product has since been removed. */
  readonly variantOptionNames?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Value of the Variant at the time the order was placed (may since have changed). Use this as a fallback if the 'variant' field itself is null. Will be null when the OrderItem is not a Variant. */
  readonly variantValue?: Maybe<Scalars['String']>;
};

export type OrderItemDiscount = {
  readonly __typename?: 'OrderItemDiscount';
  readonly value?: Maybe<Price>;
};

export type OrderPaymentMethod = {
  readonly __typename?: 'OrderPaymentMethod';
  readonly fee?: Maybe<Price>;
  readonly name?: Maybe<Scalars['String']>;
};

export type OrderStatus = {
  readonly __typename?: 'OrderStatus';
  readonly description?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly timestamp?: Maybe<Scalars['DateTime']>;
};

export type Package = {
  readonly __typename?: 'Package';
  /** Total package discount in percentage */
  readonly discountPercentage?: Maybe<Scalars['Decimal']>;
  /** Total package discount amount */
  readonly discountValue?: Maybe<Price>;
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<PackageItem>;
  /** The previous package price without any potential discount */
  readonly previousPrice?: Maybe<Price>;
  /** The current package price with any potential discount */
  readonly price?: Maybe<Price>;
};

export type PackageDiscount = PackageDiscountPercentage | PackageDiscountValue;

export type PackageDiscountPercentage = {
  readonly __typename?: 'PackageDiscountPercentage';
  readonly percentage: Scalars['Decimal'];
};

export type PackageDiscountValue = {
  readonly __typename?: 'PackageDiscountValue';
  readonly valueExVat: Scalars['Decimal'];
  readonly valueIncVat: Scalars['Decimal'];
  readonly valueVat: Scalars['Decimal'];
};

export type PackageItem = {
  readonly __typename?: 'PackageItem';
  readonly discount?: Maybe<PackageDiscount>;
  readonly minQuantity: Scalars['Int'];
  /** The previous package price without any potential discount */
  readonly previousPrice?: Maybe<Price>;
  /** The current package price with any potential discount */
  readonly price?: Maybe<Price>;
  readonly product?: Maybe<Product>;
};

export type PackagePriceInput = {
  readonly product: Scalars['ID'];
  readonly variant?: InputMaybe<Scalars['ID']>;
};

export type Page = Document & {
  readonly __typename?: 'Page';
  /** When set to false, the page will be excluded from sitemap. The frontend implementation should use this value to set meta tags to exclude the page from being indexed by crawlers. Defaults to true. */
  readonly allowWebIndexing?: Maybe<Scalars['Boolean']>;
  readonly breadcrumbText?: Maybe<Scalars['String']>;
  readonly content?: Maybe<Scalars['String']>;
  /** Get content data set via the Content Editor. NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly data?: Maybe<Content>;
  /** External URL if page is set to URL, null if not. */
  readonly externalUrl?: Maybe<Link>;
  readonly hasExternalUrl?: Maybe<Scalars['Boolean']>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly head?: Maybe<HtmlHead>;
  readonly id: Scalars['ID'];
  readonly images?: Maybe<ReadonlyArray<Maybe<Image>>>;
  readonly mainHeader?: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  /**
   * * If this page was fetched by ID using the `page(id)` query, `parent` will be returned even if it is hidden.
   * * If this page was fetched using the `pages` query, `parent` will not be returned if it is hidden
   */
  readonly parent?: Maybe<Page>;
  /** The primary route of this Page. NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly primaryRoute?: Maybe<Route>;
  /**
   * * If this page was fetched by ID using the `page(id)` query, `subPages` will be returned even if they are hidden. This can be overridden with the `includeHidden` flag.
   * * If this page was fetched using the `pages` query, `subPages` will not be returned if they are hidden. The `includeHidden` flag has no effect on this.
   */
  readonly subPages?: Maybe<ReadonlyArray<Page>>;
};


export type PageSubPagesArgs = {
  includeHidden?: InputMaybe<Scalars['Boolean']>;
};

export type PagedResult = {
  readonly __typename?: 'PagedResult';
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly filters?: Maybe<ReadonlyArray<Maybe<BooleanFilter | ListFilter | MultiListFilter | NumericRangeFilter>>>;
  readonly result: ReadonlyArray<Maybe<Product>>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly sortOrders?: Maybe<ReadonlyArray<Maybe<ProductSortOrder>>>;
  readonly totalResults?: Maybe<Scalars['Int']>;
};


export type PagedResultFiltersArgs = {
  ids?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type PagingInput = {
  readonly first?: InputMaybe<Scalars['Paging']>;
  readonly offset?: InputMaybe<Scalars['Int']>;
};

export type PersonLookup = {
  readonly __typename?: 'PersonLookup';
  readonly address?: Maybe<MaskedProperty>;
  readonly city?: Maybe<MaskedProperty>;
  readonly co?: Maybe<MaskedProperty>;
  readonly country?: Maybe<MaskedProperty>;
  readonly firstName?: Maybe<MaskedProperty>;
  readonly lastName?: Maybe<MaskedProperty>;
  readonly mobilePhoneNumber?: Maybe<MaskedProperty>;
  readonly phoneNumber?: Maybe<MaskedProperty>;
  readonly postalCode?: Maybe<MaskedProperty>;
};

export type Price = {
  readonly __typename?: 'Price';
  readonly exVat: Scalars['Decimal'];
  readonly incVat: Scalars['Decimal'];
  readonly vat: Scalars['Decimal'];
};

export type PriceHistory = {
  readonly __typename?: 'PriceHistory';
  readonly price?: Maybe<Price>;
  readonly timestamp?: Maybe<Scalars['DateTime']>;
};

export type PrivateCustomer = Customer & {
  readonly __typename?: 'PrivateCustomer';
  readonly billingAddress?: Maybe<CustomerAddress>;
  readonly communication?: Maybe<CustomerCommunication>;
  readonly deliveryAddresses?: Maybe<ReadonlyArray<Maybe<CustomerAddress>>>;
  readonly dynamicContent?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly externalAttributes?: Maybe<ReadonlyArray<Maybe<CustomerExternalAttribute>>>;
  /** Customer id for external system */
  readonly externalId?: Maybe<Scalars['String']>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly googleUserId?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly language?: Maybe<Language>;
  readonly memberId?: Maybe<Scalars['String']>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly orderHeaders?: Maybe<OrderHeaderResult>;
  readonly pid?: Maybe<Scalars['String']>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly store?: Maybe<Store>;
  /** @deprecated Use communication.acceptsEmail */
  readonly subscribedToNewsletter?: Maybe<Scalars['Boolean']>;
};


export type PrivateCustomerOrderHeadersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Product = Document & {
  readonly __typename?: 'Product';
  readonly articleNumber: Scalars['String'];
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly badges?: Maybe<ReadonlyArray<Maybe<ProductBadge>>>;
  readonly barcode?: Maybe<Scalars['String']>;
  readonly breadcrumbText?: Maybe<Scalars['String']>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly campaigns?: Maybe<ReadonlyArray<Maybe<Category>>>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly canonicalCategory?: Maybe<Category>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly categories?: Maybe<ReadonlyArray<Maybe<Category>>>;
  /** Calculates the price of the product based on the configuration choices that's been made. NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly configurationPrice?: Maybe<ProductConfigurationPrice>;
  /**
   * Configurations on a product are used to assemble a complete product,
   *
   * For example, if the product is a ring then the ring may have two configurations; measures of circumference and choice of engraving
   *
   * In this field, all the configurations of the product will be presented, the configuration name and its various options.
   */
  readonly configurations?: Maybe<ReadonlyArray<Maybe<ProductConfiguration>>>;
  readonly customFields?: Maybe<ReadonlyArray<Maybe<CustomBoolField | CustomHtmlField | CustomListField | CustomMultiLevelListField | CustomStringField>>>;
  /**
   * Specifies input field(s) for the Customer to populate on the Product that will then carry through to the Order.
   *                     If 'required' is true the Product should not be purchasable until the field is populated.
   */
  readonly customerComments?: Maybe<ReadonlyArray<Maybe<ProductComment>>>;
  /** Default previous price for the product in the channel, disregards Customer specific prices. */
  readonly defaultPreviousPrice?: Maybe<Price>;
  /** Default price for the product in the channel, disregards Customer specific prices. */
  readonly defaultPrice?: Maybe<Price>;
  readonly description: Scalars['String'];
  /** The product is recommended to only be purchasable in multiples of the distributionPackageSize. (Different shops may have different levels of leniency on this rule). */
  readonly distributionPackageSize: Scalars['Int'];
  /** All other products in the same family as the product. NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly familyMembers?: Maybe<ReadonlyArray<Product>>;
  readonly hasConfigurations: Scalars['Boolean'];
  readonly hasFamilyMembers: Scalars['Boolean'];
  /** Indicates if this product and its variants has member prices. */
  readonly hasMemberPrice?: Maybe<Scalars['Boolean']>;
  readonly hasUpsell?: Maybe<Scalars['Boolean']>;
  readonly hasVariants: Scalars['Boolean'];
  readonly hasVariantsWithDifferingPrices: Scalars['Boolean'];
  readonly head?: Maybe<HtmlHead>;
  readonly hidePrice?: Maybe<Scalars['Boolean']>;
  /** Get Product History within the set number of days */
  readonly history?: Maybe<ProductHistory>;
  readonly id: Scalars['Int'];
  readonly images?: Maybe<ReadonlyArray<Maybe<ProductImage>>>;
  readonly inPackages?: Maybe<ReadonlyArray<Product>>;
  readonly isPackage?: Maybe<Scalars['Boolean']>;
  readonly isPreOrder?: Maybe<Scalars['Boolean']>;
  /** Product header if it differs from the actual product name, usually displayed instead of the product name in the header tag at the product page. */
  readonly mainHeader: Scalars['String'];
  /**
   * The price a Customer would get if member prices are active and the Customer is logged in.
   * - Will be null if `Product.hasMemberPrice` is false.
   * - Will be set if `Product.hasMemberPrice` is true.
   */
  readonly memberPrice?: Maybe<Price>;
  readonly name: Scalars['String'];
  /**
   * ## Description
   * NB: Carries a performance cost, as asking for this will result in a separate API call in the backend.
   * ## Error Codes
   * ### InvalidAmountOfArticleNumbers
   * Number of input products doesn't match package products
   * ### InvalidArticleNumber
   * Product or variant article number doesn't match any products
   * ### UnableToGetPackagePrice
   * Failed to calculate package price
   *
   */
  readonly package?: Maybe<Package>;
  readonly preOrder?: Maybe<ProductPreOrder>;
  /** The previous price (i.e. this will be higher than `price` if the product is discounted). Will be a Customer specific previous price, if that Customer has a separate price list. */
  readonly previousPrice?: Maybe<Price>;
  /**
   * The current price.
   * - Will be a Customer specific price if that Customer has a separate price list.
   * - Will be the member price if Customer is logged in and `Product.hasMemberPrice` is true.
   * - Will be the non-member price if Customer is not logged in and `Product.hasMemberPrice` is true.
   */
  readonly price?: Maybe<Price>;
  /** The time interval of the discounted price. If the product has variants, the time interval will be that of the variant which price is shown on the product. */
  readonly priceDateSpan?: Maybe<ProductPriceDateSpan>;
  /** The primary route of this Product. NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly primaryRoute?: Maybe<Route>;
  readonly publishedDate?: Maybe<Scalars['DateTime']>;
  /** Quantity suffix e.g pcs, box, etc. */
  readonly quantitySuffix?: Maybe<Scalars['String']>;
  /** Not in use. Always null. */
  readonly recommendedPrice?: Maybe<Price>;
  readonly recommendedProducts?: Maybe<RecommendedProducts>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly relatedProducts?: Maybe<ReadonlyArray<Maybe<Product>>>;
  readonly shortDescription: Scalars['String'];
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly stockStatus?: Maybe<StockStatus>;
  readonly subName: Scalars['String'];
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly upsell?: Maybe<Upsell>;
  readonly variants?: Maybe<ProductVariants>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly warehouseStock?: Maybe<ReadonlyArray<Maybe<Warehouse>>>;
};


export type ProductCategoriesArgs = {
  includeHidden?: InputMaybe<Scalars['Boolean']>;
};


export type ProductConfigurationPriceArgs = {
  options?: InputMaybe<ReadonlyArray<ProductConfigurationPriceInput>>;
};


export type ProductHistoryArgs = {
  days?: InputMaybe<Scalars['Int']>;
};


export type ProductImagesArgs = {
  includeVariantImages?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type ProductPackageArgs = {
  articleNumbers?: InputMaybe<ReadonlyArray<InputMaybe<PackagePriceInput>>>;
};


export type ProductWarehouseStockArgs = {
  includeInactive?: InputMaybe<Scalars['Boolean']>;
};

export type ProductAutoCompleteResult = {
  readonly __typename?: 'ProductAutoCompleteResult';
  readonly result: ReadonlyArray<Maybe<Product>>;
};

export type ProductBadge = {
  readonly __typename?: 'ProductBadge';
  readonly location?: Maybe<ProductBadgeLocation>;
  readonly name?: Maybe<Scalars['String']>;
  readonly style?: Maybe<Scalars['String']>;
  readonly text?: Maybe<Scalars['String']>;
  readonly url?: Maybe<Scalars['Uri']>;
};

export type ProductBadgeLocation =
  | 'BOTTOM_LEFT'
  | 'BOTTOM_RIGHT'
  | 'CUSTOM'
  | 'TOP_LEFT'
  | 'TOP_RIGHT';

export type ProductComment = {
  readonly __typename?: 'ProductComment';
  readonly name: Scalars['String'];
  readonly required: Scalars['Boolean'];
};

export type ProductConfiguration = {
  readonly __typename?: 'ProductConfiguration';
  readonly name?: Maybe<Scalars['String']>;
  readonly options: ReadonlyArray<Maybe<ProductConfigurationOption>>;
};

/**
 * Options by which you can configure a product.
 *
 * For instance, if you're selling rope the available options might be the dimensions; 10mm, 20mm, 30mm, etc.
 *
 * Price is either used as is, or if the configuration is using a price calculation (e.g. the rope is priced by length) it will be used in the calculation formula; e.g. (Length * Price).
 */
export type ProductConfigurationOption = {
  readonly __typename?: 'ProductConfigurationOption';
  readonly id: Scalars['ID'];
  readonly name?: Maybe<Scalars['String']>;
  readonly price?: Maybe<Price>;
  /** This will be set if the configuration requires price calculation, e.g. you might sell rope and price it by length. */
  readonly priceCalculation?: Maybe<ProductConfigurationPriceCalculation>;
};

export type ProductConfigurationPrice = {
  readonly __typename?: 'ProductConfigurationPrice';
  readonly previousPrice?: Maybe<Price>;
  readonly price?: Maybe<Price>;
};

/**
 * Describes how the price is calculated on a configuration option.
 *
 * E.g. the configuration is for a carpet and it has a price calculation formula that reads: 'Width * Length * Price / 10000'.
 *
 * In this case, the variables would contain 'Width' and 'Length' whereas the 'Price' is taken from the selected option.
 */
export type ProductConfigurationPriceCalculation = {
  readonly __typename?: 'ProductConfigurationPriceCalculation';
  readonly formula?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name?: Maybe<Scalars['String']>;
  readonly variables?: Maybe<ReadonlyArray<Maybe<ProductConfigurationPriceCalculationVariable>>>;
};

export type ProductConfigurationPriceCalculationVariable = {
  readonly __typename?: 'ProductConfigurationPriceCalculationVariable';
  readonly id: Scalars['ID'];
  readonly name?: Maybe<Scalars['String']>;
};

export type ProductConfigurationPriceInput = {
  readonly optionId: Scalars['ID'];
};

export type ProductCustomFieldType =
  | 'BOOL'
  | 'HTML'
  | 'LIST'
  | 'MULTI_LEVEL_LIST'
  | 'STRING';

export type ProductHistory = {
  readonly __typename?: 'ProductHistory';
  readonly previousPrice?: Maybe<ReadonlyArray<Maybe<PriceHistory>>>;
};

export type ProductImage = {
  readonly __typename?: 'ProductImage';
  /** Alternate text for the image, commonly used for the alt attribute of img-tags. */
  readonly alt?: Maybe<Scalars['String']>;
  readonly modifiedDate?: Maybe<Scalars['String']>;
  /** @deprecated Images will no longer be offered in different sizes. Instead use 'url' in conjunction with our image resizing service. */
  readonly sizes: ReadonlyArray<Maybe<ProductImageSize>>;
  /** Extra information, commonly used for the title attribute of img-tag. Should be shown on hover. */
  readonly title?: Maybe<Scalars['String']>;
  readonly url?: Maybe<Scalars['Uri']>;
};

export type ProductImageSize = {
  readonly __typename?: 'ProductImageSize';
  readonly height?: Maybe<Scalars['Int']>;
  readonly url?: Maybe<Scalars['Uri']>;
  readonly width?: Maybe<Scalars['Int']>;
};

export type ProductOrderOptions =
  | 'ARTICLE_NUMBER'
  | 'BESTSELLER'
  | 'CUSTOM'
  | 'NAME'
  | 'PRICE'
  | 'PUBLISH_DATE'
  | 'SUB_HEADING';

export type ProductPreOrder = {
  readonly __typename?: 'ProductPreOrder';
  readonly fromDate?: Maybe<Scalars['DateTime']>;
  readonly toDate?: Maybe<Scalars['DateTime']>;
};

export type ProductPriceDateSpan = {
  readonly __typename?: 'ProductPriceDateSpan';
  readonly endDate?: Maybe<Scalars['DateTime']>;
  readonly startDate?: Maybe<Scalars['DateTime']>;
};

export type ProductSearchResult = {
  readonly __typename?: 'ProductSearchResult';
  readonly filters?: Maybe<ReadonlyArray<Maybe<BooleanFilter | ListFilter | MultiListFilter | NumericRangeFilter>>>;
  readonly result: ReadonlyArray<Maybe<Product>>;
  readonly totalResults?: Maybe<Scalars['Int']>;
};

export type ProductSortOrder = {
  readonly __typename?: 'ProductSortOrder';
  readonly defaultDirection: SortDirection;
  readonly isDefault: Scalars['Boolean'];
  readonly text: Scalars['String'];
  readonly value: ProductOrderOptions;
};

export type ProductVariant = {
  readonly __typename?: 'ProductVariant';
  readonly articleNumber: Scalars['String'];
  readonly barcode?: Maybe<Scalars['String']>;
  /** Default previous price for the product in the channel, disregards Customer specific prices. */
  readonly defaultPreviousPrice?: Maybe<Price>;
  /** Default price for the product in the channel, disregards Customer specific prices. */
  readonly defaultPrice?: Maybe<Price>;
  /** Get Product History within the set number of days */
  readonly history?: Maybe<ProductVariantHistory>;
  readonly id: Scalars['String'];
  readonly images?: Maybe<ReadonlyArray<Maybe<ProductImage>>>;
  /**
   * The price a Customer would get if member prices are active and the Customer is logged in.
   * - Will be null if `Product.hasMemberPrice` is false.
   * - Will be set if `Product.hasMemberPrice` is true.
   */
  readonly memberPrice?: Maybe<Price>;
  /** The previous price (i.e. this will be higher than `price` if the product is discounted). Will be a Customer specific previous price, if that Customer has a separate price list. */
  readonly previousPrice?: Maybe<Price>;
  /**
   * The current price.
   * - Will be a Customer specific price if that Customer has a separate price list.
   * - Will be the member price if Customer is logged in and `Product.hasMemberPrice` is true.
   * - Will be the non-member price if Customer is not logged in and `Product.hasMemberPrice` is true.
   */
  readonly price?: Maybe<Price>;
  /** The time interval of the discounted price. */
  readonly priceDateSpan?: Maybe<ProductPriceDateSpan>;
  /** Not in use. Always null. */
  readonly recommendedPrice?: Maybe<Price>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly stockStatus?: Maybe<StockStatus>;
  /** Variant values (combination of option values) */
  readonly values: ReadonlyArray<Maybe<Scalars['String']>>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly warehouseStock?: Maybe<ReadonlyArray<Maybe<Warehouse>>>;
};


export type ProductVariantHistoryArgs = {
  days?: InputMaybe<Scalars['Int']>;
};


export type ProductVariantWarehouseStockArgs = {
  includeInactive?: InputMaybe<Scalars['Boolean']>;
};

export type ProductVariantHistory = {
  readonly __typename?: 'ProductVariantHistory';
  readonly previousPrice?: Maybe<ReadonlyArray<Maybe<PriceHistory>>>;
};

export type ProductVariantOption = {
  readonly __typename?: 'ProductVariantOption';
  readonly name?: Maybe<Scalars['String']>;
  readonly values: ReadonlyArray<Maybe<Scalars['String']>>;
};

export type ProductVariants = {
  readonly __typename?: 'ProductVariants';
  /** Available product variant options. */
  readonly options: ReadonlyArray<Maybe<ProductVariantOption>>;
  /** Product variants, contains all possible values of options. */
  readonly values: ReadonlyArray<Maybe<ProductVariant>>;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly cart?: Maybe<Cart>;
  /** get categories by channel id, culture, root and culture */
  readonly categories: ReadonlyArray<Maybe<Category>>;
  /** get category by id */
  readonly category?: Maybe<Category>;
  /** get channel by id, null gets default channel */
  readonly channel?: Maybe<Channel>;
  /** get all channels */
  readonly channels: ReadonlyArray<Maybe<Channel>>;
  /** Returns content found, either by a list of content Ids, or filtered by tags. In the case of filtering by ids, not found content Ids are listed as well. */
  readonly content?: Maybe<MultipleContent>;
  readonly customer?: Maybe<BusinessCustomer | PrivateCustomer>;
  /** Lookup a customer by a mobile phone number */
  readonly customerLookup?: Maybe<BusinessCustomer | PrivateCustomer>;
  /** Fetches customer-unique offers */
  readonly customerLoyalty?: Maybe<CustomerLoyalty>;
  /** get customer product list by id, null gets default product list */
  readonly customerProductList?: Maybe<CustomerProductList>;
  readonly customerProductLists: ReadonlyArray<Maybe<CustomerProductList>>;
  /**
   * Used in the sign up process when the shop has a third party customer repository, e.g. Voyado.
   *
   * Error codes: INVALID_VALUE (if `key` is null), ExternalCustomerLookupFailed
   */
  readonly externalCustomerLookup?: Maybe<ExternalCustomerResult>;
  /** Fetches my pages content */
  readonly myPagesContent?: Maybe<MyPagesContent>;
  /** fetch order by id */
  readonly order?: Maybe<Order>;
  /** Fetch a single page by ID. */
  readonly page?: Maybe<Page>;
  /** Fetch all non-hidden pages. If you are using nested pages, only root level pages will be returned. */
  readonly pages: ReadonlyArray<Maybe<Page>>;
  /** Get information on person by Key(personal id number or phone number) */
  readonly personLookup?: Maybe<PersonLookup>;
  readonly product?: Maybe<Product>;
  readonly products: ReadonlyArray<Maybe<Product>>;
  /** get product, category or page by path. */
  readonly route?: Maybe<Route>;
  readonly search?: Maybe<SearchResult>;
  readonly searchAutoComplete?: Maybe<SearchAutoCompleteResult>;
  readonly startPage?: Maybe<StartPage>;
  readonly store?: Maybe<Store>;
  readonly stores: ReadonlyArray<Maybe<Store>>;
};


export type QueryCartArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryCategoriesArgs = {
  includeHidden?: InputMaybe<Scalars['Boolean']>;
  levels?: InputMaybe<Scalars['Int']>;
  root?: InputMaybe<Scalars['Int']>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryChannelArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryContentArgs = {
  ids?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  tags?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type QueryCustomerLookupArgs = {
  phoneNumber?: InputMaybe<Scalars['String']>;
};


export type QueryCustomerProductListArgs = {
  id?: InputMaybe<Scalars['ID']>;
  shareToken?: InputMaybe<Scalars['String']>;
};


export type QueryExternalCustomerLookupArgs = {
  key?: InputMaybe<Scalars['String']>;
};


export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['Int']>;
  orderId?: InputMaybe<Scalars['ID']>;
};


export type QueryPageArgs = {
  id: Scalars['Int'];
};


export type QueryPersonLookupArgs = {
  key: Scalars['String'];
};


export type QueryProductArgs = {
  articleNumber?: InputMaybe<Scalars['String']>;
  barcode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryProductsArgs = {
  articleNumbers?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  barcodes?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  ids?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


export type QueryRouteArgs = {
  path: Scalars['String'];
};


export type QuerySearchArgs = {
  term: Scalars['String'];
};


export type QuerySearchAutoCompleteArgs = {
  term: Scalars['String'];
};


export type QueryStartPageArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryStoreArgs = {
  id: Scalars['Int'];
};


export type QueryStoresArgs = {
  includeInactive?: Scalars['Boolean'];
};

export type RangeFilterInput = {
  readonly id: Scalars['String'];
  readonly max?: InputMaybe<Scalars['Decimal']>;
  readonly min?: InputMaybe<Scalars['Decimal']>;
};

export type RecommendedProducts = {
  readonly __typename?: 'RecommendedProducts';
  /** Customers who bought this product also bought these products. */
  readonly bought?: Maybe<ReadonlyArray<Maybe<Product>>>;
  /** A shuffled top list of popular products. */
  readonly shuffledToplist?: Maybe<ReadonlyArray<Maybe<Product>>>;
  /** Customers who viewed this product also viewed these products. */
  readonly viewed?: Maybe<ReadonlyArray<Maybe<Product>>>;
};


export type RecommendedProductsBoughtArgs = {
  count?: InputMaybe<Scalars['Int']>;
};


export type RecommendedProductsShuffledToplistArgs = {
  count?: InputMaybe<Scalars['Int']>;
};


export type RecommendedProductsViewedArgs = {
  count?: InputMaybe<Scalars['Int']>;
};

export type RemoveFromCartInput = {
  readonly cartId: Scalars['String'];
  readonly itemId: Scalars['String'];
};

export type RemoveMultipleFromCartInput = {
  readonly cartId: Scalars['String'];
  readonly itemIds: ReadonlyArray<Scalars['String']>;
};

export type RequestPasswordResetResult = {
  readonly __typename?: 'RequestPasswordResetResult';
  readonly success: Scalars['Boolean'];
};

export type ResetPassword = {
  readonly __typename?: 'ResetPassword';
  readonly token: Token;
};

/** Represents a route to either a Category, a Product, a Page or the StartPage. */
export type Route = {
  readonly __typename?: 'Route';
  /** Alternative routes for this object, if it exists in another channel and/or in another language.NB: Carries no additional performance cost. */
  readonly alternateRoutes?: Maybe<ReadonlyArray<Maybe<AlternateRoute>>>;
  /** Breadcrumb texts; starting with the root parent, ending on this route. */
  readonly breadcrumbs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly canonicalPath?: Maybe<Scalars['String']>;
  /** N.B. for troubleshooting routes only! */
  readonly debug?: Maybe<Scalars['String']>;
  readonly id: Scalars['String'];
  /** The Category, Product, Page or StartPage that the Route resolves to. NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly object?: Maybe<Category | Page | Product | StartPage>;
  /** Parents are resolved by traversing the path, starting from the end, and are guaranteed to be returned in that order. NB: Carries a performance cost, as asking for this will result in a different, slightly more expensive (the more categories a shop has, the more expensive this gets), route query in the backend. */
  readonly parents?: Maybe<ReadonlyArray<Maybe<Route>>>;
  readonly path: Scalars['String'];
  readonly slug: Scalars['String'];
};

export type SearchAutoCompleteResult = {
  readonly __typename?: 'SearchAutoCompleteResult';
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly categories?: Maybe<CategoryAutoCompleteResult>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly products?: Maybe<ProductAutoCompleteResult>;
};


export type SearchAutoCompleteResultCategoriesArgs = {
  first?: InputMaybe<Scalars['Paging']>;
};

export type SearchResult = {
  readonly __typename?: 'SearchResult';
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly categories?: Maybe<CategorySearchResult>;
  readonly products?: Maybe<ProductSearchResult>;
};


export type SearchResultCategoriesArgs = {
  paging?: InputMaybe<PagingInput>;
};


export type SearchResultProductsArgs = {
  filters?: InputMaybe<FilterInput>;
  paging?: InputMaybe<PagingInput>;
};

export type SelectedProductConfiguration = {
  readonly __typename?: 'SelectedProductConfiguration';
  readonly name?: Maybe<Scalars['String']>;
  readonly option: SelectedProductConfigurationOption;
};

export type SelectedProductConfigurationOption = {
  readonly __typename?: 'SelectedProductConfigurationOption';
  readonly id: Scalars['ID'];
  readonly name?: Maybe<Scalars['String']>;
};

export type SetItemQuantityInput = {
  readonly cartId: Scalars['String'];
  readonly itemId: Scalars['String'];
  readonly quantity: Scalars['Int'];
};

export type Shipping = {
  readonly __typename?: 'Shipping';
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly freeShippingLimit?: Maybe<FreeShippingLimit>;
};

/** BillingAddress itself is a required field. Whether fields belonging to BillingAddress are required is determined by privateCustomerFields or businessCustomerFields, found on channel.settings.countrySettings. */
export type SignUpBillingAddressInput = {
  readonly city?: InputMaybe<SignUpPropertyInput>;
  readonly co?: InputMaybe<SignUpPropertyInput>;
  readonly company?: InputMaybe<SignUpPropertyInput>;
  readonly companyAtt?: InputMaybe<SignUpPropertyInput>;
  readonly countryCode?: InputMaybe<SignUpPropertyInput>;
  readonly department?: InputMaybe<SignUpPropertyInput>;
  readonly firstName?: InputMaybe<SignUpPropertyInput>;
  readonly lastName?: InputMaybe<SignUpPropertyInput>;
  readonly mobilePhone?: InputMaybe<SignUpPropertyInput>;
  readonly municipality?: InputMaybe<SignUpPropertyInput>;
  readonly phone?: InputMaybe<SignUpPropertyInput>;
  readonly postalCode?: InputMaybe<SignUpPropertyInput>;
  readonly region?: InputMaybe<SignUpPropertyInput>;
  readonly streetName?: InputMaybe<SignUpPropertyInput>;
};

export type SignUpConsentInput = {
  readonly id?: InputMaybe<Scalars['String']>;
  readonly value?: InputMaybe<Scalars['Boolean']>;
};

export type SignUpDeliveryAddressInput = {
  readonly addressName?: InputMaybe<Scalars['String']>;
  readonly city?: InputMaybe<Scalars['String']>;
  readonly co?: InputMaybe<Scalars['String']>;
  readonly company?: InputMaybe<Scalars['String']>;
  readonly companyAtt?: InputMaybe<Scalars['String']>;
  readonly countryCode?: InputMaybe<Scalars['String']>;
  readonly department?: InputMaybe<Scalars['String']>;
  readonly firstName?: InputMaybe<Scalars['String']>;
  readonly lastName?: InputMaybe<Scalars['String']>;
  readonly mobilePhone?: InputMaybe<Scalars['String']>;
  readonly municipality?: InputMaybe<Scalars['String']>;
  readonly phone?: InputMaybe<Scalars['String']>;
  readonly postalCode?: InputMaybe<Scalars['String']>;
  readonly region?: InputMaybe<Scalars['String']>;
  readonly streetName?: InputMaybe<Scalars['String']>;
};

export type SignUpExternalAttribute = {
  readonly name: Scalars['String'];
  readonly value: Scalars['String'];
};

export type SignUpInput = {
  readonly billingAddress: SignUpBillingAddressInput;
  readonly consents?: InputMaybe<ReadonlyArray<InputMaybe<SignUpConsentInput>>>;
  readonly deliveryAddresses?: InputMaybe<ReadonlyArray<InputMaybe<SignUpDeliveryAddressInput>>>;
  readonly dynamicContent?: InputMaybe<Scalars['String']>;
  readonly emailAddress: Scalars['String'];
  readonly externalAttributes?: InputMaybe<ReadonlyArray<InputMaybe<SignUpExternalAttribute>>>;
  /** Customer id for external system */
  readonly externalId?: InputMaybe<Scalars['String']>;
  readonly organizationNumber?: InputMaybe<Scalars['String']>;
  readonly password?: InputMaybe<Scalars['String']>;
  readonly pid?: InputMaybe<Scalars['String']>;
  readonly preferences?: InputMaybe<SignUpPreferencesInput>;
  readonly priceListAccessCode?: InputMaybe<Scalars['String']>;
  readonly type: CustomerType;
};

export type SignUpPreferencesCommunicationInput = {
  readonly acceptsEmail?: InputMaybe<Scalars['Boolean']>;
  readonly acceptsPostal?: InputMaybe<Scalars['Boolean']>;
  readonly acceptsSms?: InputMaybe<Scalars['Boolean']>;
  readonly culture?: InputMaybe<Scalars['String']>;
};

export type SignUpPreferencesInput = {
  readonly storeLocationId?: InputMaybe<Scalars['Int']>;
  readonly type?: InputMaybe<SignUpPreferencesCommunicationInput>;
};

/** This input is used for fields that can be auto filled with PersonLookup */
export type SignUpPropertyInput = {
  /** Specifies if the value field is encrypted or not. */
  readonly hasChanged?: InputMaybe<Scalars['Boolean']>;
  /** If the user has made no change this should contain the encrypted value from PersonLookup, otherwise populate with the user input. */
  readonly value?: InputMaybe<Scalars['String']>;
};

export type SignUpResponse = {
  readonly __typename?: 'SignUpResponse';
  readonly token: Token;
};

export type SortDirection =
  | 'ASCENDING'
  | 'DESCENDING';

export type StartPage = Document & {
  readonly __typename?: 'StartPage';
  readonly breadcrumbText?: Maybe<Scalars['String']>;
  readonly content?: Maybe<Scalars['String']>;
  /** Get content data set via the Content Editor. NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly data?: Maybe<Content>;
  /** NB: Carries a performance cost, as asking for this will result in a separate API call in the backend. */
  readonly head?: Maybe<HtmlHead>;
  readonly id: Scalars['Int'];
  readonly images?: Maybe<ReadonlyArray<Maybe<Image>>>;
  readonly isActive?: Maybe<Scalars['Boolean']>;
  readonly items?: Maybe<ReadonlyArray<Maybe<StartPageItem>>>;
  readonly name: Scalars['String'];
  /** The primary route of this StartPage */
  readonly primaryRoute?: Maybe<Route>;
};

export type StartPageItem = {
  readonly __typename?: 'StartPageItem';
  readonly column?: Maybe<Scalars['Int']>;
  readonly id: Scalars['Int'];
  readonly item: StartPageItemObject;
  readonly row?: Maybe<Scalars['Int']>;
};

export type StartPageItemObject = CustomItem | Product;

export type StockStatus = {
  readonly __typename?: 'StockStatus';
  readonly buyable: Scalars['Boolean'];
  /** Globally unique id. */
  readonly id: Scalars['ID'];
  readonly maxOrderQuantity?: Maybe<Scalars['Int']>;
  readonly stockDate?: Maybe<Scalars['DateTime']>;
  readonly stockNotificationEnabled?: Maybe<Scalars['Boolean']>;
  /** The stock status id, not globally unique. */
  readonly stockStatusId: Scalars['ID'];
  readonly text?: Maybe<Scalars['String']>;
};

export type Store = {
  readonly __typename?: 'Store';
  readonly address1?: Maybe<Scalars['String']>;
  readonly address2?: Maybe<Scalars['String']>;
  readonly city?: Maybe<Scalars['String']>;
  readonly contact?: Maybe<Scalars['String']>;
  readonly coordinates?: Maybe<Coordinates>;
  readonly description?: Maybe<Scalars['String']>;
  readonly externalId?: Maybe<Scalars['String']>;
  readonly id: Scalars['Int'];
  readonly name?: Maybe<Scalars['String']>;
  readonly openHours?: Maybe<Scalars['String']>;
  readonly other?: Maybe<Scalars['String']>;
  readonly region?: Maybe<Scalars['String']>;
};

export type StringValue = {
  readonly __typename?: 'StringValue';
  readonly value?: Maybe<Scalars['String']>;
};

/**
 * Authorization token that is used for customer actions such as login, delete or update
 * The token contains three different roles:
 * 0: Standard.
 * 1: Lite
 * 2: VoyadoSemiLogin
 */
export type Token = {
  readonly __typename?: 'Token';
  readonly value: Scalars['String'];
};

export type Tracking = {
  readonly __typename?: 'Tracking';
  readonly fca?: Maybe<FacebookConversionsApi>;
  readonly ga?: Maybe<GoogleAnalytics>;
  readonly gtm?: Maybe<GoogleTagManager>;
};

export type UpdateCartInput = {
  readonly cartId?: InputMaybe<Scalars['String']>;
  readonly items?: InputMaybe<ReadonlyArray<UpdateCartItemInput>>;
};

export type UpdateCartItemInput = {
  readonly comments?: InputMaybe<ReadonlyArray<InputMaybe<InputComment>>>;
  readonly id: Scalars['String'];
  readonly preOrderDate?: InputMaybe<Scalars['DateTime']>;
  readonly quantity?: Scalars['Int'];
};

export type UpdateCartMutation = {
  readonly __typename?: 'UpdateCartMutation';
  readonly cart?: Maybe<Cart>;
};

export type UpdateCustomerGroupResult = {
  readonly __typename?: 'UpdateCustomerGroupResult';
  readonly success: Scalars['Boolean'];
};

export type UpdateCustomerPriceListResult = {
  readonly __typename?: 'UpdateCustomerPriceListResult';
  readonly success: Scalars['Boolean'];
};

export type UpdateCustomerProductListInput = {
  readonly description?: InputMaybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly typeId: Scalars['ID'];
};

export type UpdateCustomerProductListItemInput = {
  readonly articleNumber: Scalars['String'];
  readonly description?: InputMaybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** Default value is 1. */
  readonly quantity?: InputMaybe<Scalars['Int']>;
};

/** Responds with a boolean value whether the update has been successful or not */
export type UpdatePasswordResult = {
  readonly __typename?: 'UpdatePasswordResult';
  readonly success: Scalars['Boolean'];
};

export type Upsell = {
  readonly __typename?: 'Upsell';
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<UpsellItem>;
};

export type UpsellDiscount = UpsellDiscountPercentage | UpsellDiscountValue;

export type UpsellDiscountPercentage = {
  readonly __typename?: 'UpsellDiscountPercentage';
  readonly percentage: Scalars['Decimal'];
};

export type UpsellDiscountValue = {
  readonly __typename?: 'UpsellDiscountValue';
  readonly valueExVat: Scalars['Decimal'];
  readonly valueIncVat: Scalars['Decimal'];
  readonly valueVat: Scalars['Decimal'];
};

export type UpsellItem = {
  readonly __typename?: 'UpsellItem';
  readonly discount: UpsellDiscount;
  readonly minQuantity: Scalars['Int'];
  readonly product?: Maybe<Product>;
};

export type Warehouse = {
  readonly __typename?: 'Warehouse';
  readonly location?: Maybe<Store>;
  readonly stockLevel?: Maybe<Scalars['Int']>;
};

export type PaymentType = {
  readonly __typename?: 'paymentType';
  readonly apiClientId: Scalars['String'];
  readonly availableForBusiness: Scalars['Boolean'];
  readonly availableForPrivate: Scalars['Boolean'];
  readonly name: Scalars['String'];
};

export type ContentFragmentFragment = { readonly __typename?: 'Content', readonly id: string, readonly items?: ReadonlyArray<{ readonly __typename?: 'ContentItem', readonly type: string, readonly children?: ReadonlyArray<{ readonly __typename?: 'ContentItem', readonly type: string, readonly properties?: ReadonlyArray<{ readonly __typename?: 'ContentItemProperty', readonly name: string, readonly type: string, readonly valueType?: ContentPropertyValueType | null, readonly value?: { readonly __typename?: 'BoolValue', readonly boolValue?: boolean | null } | { readonly __typename?: 'Category', readonly name: string, readonly images?: ReadonlyArray<{ readonly __typename?: 'CategoryImage', readonly url?: any | null } | null> | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | { readonly __typename?: 'ImageValue', readonly value?: string | null, readonly focalPointX?: number | null, readonly focalPointY?: number | null } | { readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly shortDescription: string, readonly description: string, readonly mainHeader: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string, readonly breadcrumbs?: ReadonlyArray<string | null> | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | { readonly __typename?: 'StringValue', readonly value?: string | null } | null } | null> | null } | null> | null, readonly properties?: ReadonlyArray<{ readonly __typename?: 'ContentItemProperty', readonly name: string, readonly type: string, readonly valueType?: ContentPropertyValueType | null, readonly value?: { readonly __typename?: 'BoolValue', readonly boolValue?: boolean | null } | { readonly __typename?: 'Category', readonly name: string, readonly images?: ReadonlyArray<{ readonly __typename?: 'CategoryImage', readonly url?: any | null } | null> | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | { readonly __typename?: 'ImageValue', readonly value?: string | null, readonly focalPointX?: number | null, readonly focalPointY?: number | null } | { readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly shortDescription: string, readonly description: string, readonly mainHeader: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string, readonly breadcrumbs?: ReadonlyArray<string | null> | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | { readonly __typename?: 'StringValue', readonly value?: string | null } | null } | null> | null } | null> | null };

export type CategoryPageFragment = { readonly __typename?: 'Category', readonly id: number, readonly name: string, readonly mainHeader?: string | null, readonly content?: string | null, readonly breadcrumbText?: string | null, readonly isDynamic: boolean, readonly images?: ReadonlyArray<{ readonly __typename?: 'CategoryImage', readonly width?: number | null, readonly url?: any | null } | null> | null, readonly data?: { readonly __typename?: 'Content', readonly id: string, readonly items?: ReadonlyArray<{ readonly __typename?: 'ContentItem', readonly type: string, readonly children?: ReadonlyArray<{ readonly __typename?: 'ContentItem', readonly type: string, readonly properties?: ReadonlyArray<{ readonly __typename?: 'ContentItemProperty', readonly name: string, readonly type: string, readonly valueType?: ContentPropertyValueType | null, readonly value?: { readonly __typename?: 'BoolValue', readonly boolValue?: boolean | null } | { readonly __typename?: 'Category', readonly name: string, readonly images?: ReadonlyArray<{ readonly __typename?: 'CategoryImage', readonly url?: any | null } | null> | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | { readonly __typename?: 'ImageValue', readonly value?: string | null, readonly focalPointX?: number | null, readonly focalPointY?: number | null } | { readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly shortDescription: string, readonly description: string, readonly mainHeader: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string, readonly breadcrumbs?: ReadonlyArray<string | null> | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | { readonly __typename?: 'StringValue', readonly value?: string | null } | null } | null> | null } | null> | null, readonly properties?: ReadonlyArray<{ readonly __typename?: 'ContentItemProperty', readonly name: string, readonly type: string, readonly valueType?: ContentPropertyValueType | null, readonly value?: { readonly __typename?: 'BoolValue', readonly boolValue?: boolean | null } | { readonly __typename?: 'Category', readonly name: string, readonly images?: ReadonlyArray<{ readonly __typename?: 'CategoryImage', readonly url?: any | null } | null> | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | { readonly __typename?: 'ImageValue', readonly value?: string | null, readonly focalPointX?: number | null, readonly focalPointY?: number | null } | { readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly shortDescription: string, readonly description: string, readonly mainHeader: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string, readonly breadcrumbs?: ReadonlyArray<string | null> | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | { readonly __typename?: 'StringValue', readonly value?: string | null } | null } | null> | null } | null> | null } | null, readonly products?: { readonly __typename?: 'PagedResult', readonly totalResults?: number | null, readonly sortOrders?: ReadonlyArray<{ readonly __typename?: 'ProductSortOrder', readonly text: string, readonly defaultDirection: SortDirection, readonly value: ProductOrderOptions } | null> | null, readonly filters?: ReadonlyArray<{ readonly __typename: 'BooleanFilter', readonly default?: boolean | null, readonly id: string, readonly name: string } | { readonly __typename: 'ListFilter', readonly id: string, readonly name: string, readonly items: ReadonlyArray<{ readonly __typename?: 'ListFilterItem', readonly id: string, readonly text: string, readonly value: string, readonly resultCount?: number | null } | null> } | { readonly __typename: 'MultiListFilter', readonly id: string, readonly name: string, readonly lists: ReadonlyArray<{ readonly __typename?: 'MultiListFilterList', readonly id: string, readonly name: string, readonly items: ReadonlyArray<{ readonly __typename?: 'ListFilterItem', readonly id: string, readonly value: string, readonly text: string, readonly resultCount?: number | null } | null> } | null> } | { readonly __typename: 'NumericRangeFilter', readonly id: string, readonly min: any, readonly max: any, readonly name: string } | null> | null, readonly result: ReadonlyArray<{ readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly isPackage?: boolean | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null, readonly modifiedDate?: string | null } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly canonicalCategory?: { readonly __typename?: 'Category', readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | null> } | null };

export type ContentItemFragmentFragment = { readonly __typename?: 'ContentItem', readonly type: string, readonly properties?: ReadonlyArray<{ readonly __typename?: 'ContentItemProperty', readonly name: string, readonly type: string, readonly valueType?: ContentPropertyValueType | null, readonly value?: { readonly __typename?: 'BoolValue', readonly boolValue?: boolean | null } | { readonly __typename?: 'Category', readonly name: string, readonly images?: ReadonlyArray<{ readonly __typename?: 'CategoryImage', readonly url?: any | null } | null> | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | { readonly __typename?: 'ImageValue', readonly value?: string | null, readonly focalPointX?: number | null, readonly focalPointY?: number | null } | { readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly shortDescription: string, readonly description: string, readonly mainHeader: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string, readonly breadcrumbs?: ReadonlyArray<string | null> | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | { readonly __typename?: 'StringValue', readonly value?: string | null } | null } | null> | null };

export type StartPageCategoryGridFragment = { readonly __typename?: 'Category', readonly name: string, readonly images?: ReadonlyArray<{ readonly __typename?: 'CategoryImage', readonly url?: any | null } | null> | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null };

export type StartPageProductGridFragment = { readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly shortDescription: string, readonly description: string, readonly mainHeader: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string, readonly breadcrumbs?: ReadonlyArray<string | null> | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null };

export type ContentPageFragment = { readonly __typename?: 'Page', readonly name: string, readonly mainHeader?: string | null, readonly content?: string | null, readonly pageId: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'Image', readonly url?: any | null } | null> | null, readonly data?: { readonly __typename?: 'Content', readonly id: string, readonly items?: ReadonlyArray<{ readonly __typename?: 'ContentItem', readonly type: string, readonly children?: ReadonlyArray<{ readonly __typename?: 'ContentItem', readonly type: string, readonly properties?: ReadonlyArray<{ readonly __typename?: 'ContentItemProperty', readonly name: string, readonly type: string, readonly valueType?: ContentPropertyValueType | null, readonly value?: { readonly __typename?: 'BoolValue', readonly boolValue?: boolean | null } | { readonly __typename?: 'Category', readonly name: string, readonly images?: ReadonlyArray<{ readonly __typename?: 'CategoryImage', readonly url?: any | null } | null> | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | { readonly __typename?: 'ImageValue', readonly value?: string | null, readonly focalPointX?: number | null, readonly focalPointY?: number | null } | { readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly shortDescription: string, readonly description: string, readonly mainHeader: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string, readonly breadcrumbs?: ReadonlyArray<string | null> | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | { readonly __typename?: 'StringValue', readonly value?: string | null } | null } | null> | null } | null> | null, readonly properties?: ReadonlyArray<{ readonly __typename?: 'ContentItemProperty', readonly name: string, readonly type: string, readonly valueType?: ContentPropertyValueType | null, readonly value?: { readonly __typename?: 'BoolValue', readonly boolValue?: boolean | null } | { readonly __typename?: 'Category', readonly name: string, readonly images?: ReadonlyArray<{ readonly __typename?: 'CategoryImage', readonly url?: any | null } | null> | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | { readonly __typename?: 'ImageValue', readonly value?: string | null, readonly focalPointX?: number | null, readonly focalPointY?: number | null } | { readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly shortDescription: string, readonly description: string, readonly mainHeader: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string, readonly breadcrumbs?: ReadonlyArray<string | null> | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | { readonly __typename?: 'StringValue', readonly value?: string | null } | null } | null> | null } | null> | null } | null, readonly parent?: { readonly __typename?: 'Page', readonly id: string, readonly name: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null, readonly subPages?: ReadonlyArray<{ readonly __typename?: 'Page', readonly id: string, readonly name: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null }> | null } | null, readonly subPages?: ReadonlyArray<{ readonly __typename?: 'Page', readonly id: string, readonly name: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null }> | null };

export type SubPageFragment = { readonly __typename?: 'Page', readonly id: string, readonly name: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null };

export type InPackagesFragment = { readonly __typename?: 'Product', readonly inPackages?: ReadonlyArray<{ readonly __typename?: 'Product', readonly id: number, readonly name: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null }> | null };

export type PackageProductFragmentFragment = { readonly __typename?: 'Product', readonly isPackage?: boolean | null, readonly package?: { readonly __typename?: 'Package', readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly discountValue?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly items: ReadonlyArray<{ readonly __typename?: 'PackageItem', readonly minQuantity: number, readonly product?: { readonly __typename?: 'Product', readonly id: number, readonly name: string, readonly articleNumber: string, readonly hasVariants: boolean, readonly hasConfigurations: boolean, readonly subName: string, readonly stockStatus?: { readonly __typename?: 'StockStatus', readonly buyable: boolean, readonly maxOrderQuantity?: number | null, readonly stockDate?: any | null, readonly stockNotificationEnabled?: boolean | null, readonly text?: string | null } | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string, readonly id: string } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly variants?: { readonly __typename?: 'ProductVariants', readonly options: ReadonlyArray<{ readonly __typename?: 'ProductVariantOption', readonly name?: string | null, readonly values: ReadonlyArray<string | null> } | null>, readonly values: ReadonlyArray<{ readonly __typename?: 'ProductVariant', readonly articleNumber: string, readonly values: ReadonlyArray<string | null>, readonly stockStatus?: { readonly __typename?: 'StockStatus', readonly buyable: boolean, readonly maxOrderQuantity?: number | null, readonly stockDate?: any | null, readonly stockNotificationEnabled?: boolean | null, readonly text?: string | null } | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | null> } | null } | null, readonly discount?: { readonly __typename?: 'PackageDiscountPercentage', readonly percentage: any } | { readonly __typename?: 'PackageDiscountValue', readonly valueExVat: any, readonly valueIncVat: any, readonly valueVat: any } | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null }> } | null };

export type ProductGridFragment = { readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly isPackage?: boolean | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null, readonly modifiedDate?: string | null } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly canonicalCategory?: { readonly __typename?: 'Category', readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null };

export type ProductPageFragment = { readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly breadcrumbText?: string | null, readonly shortDescription: string, readonly description: string, readonly hasVariants: boolean, readonly isPackage?: boolean | null, readonly hasConfigurations: boolean, readonly canonicalCategory?: { readonly __typename?: 'Category', readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | null, readonly categories?: ReadonlyArray<{ readonly __typename?: 'Category', readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | null> | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string, readonly id: string, readonly breadcrumbs?: ReadonlyArray<string | null> | null } | null, readonly stockStatus?: { readonly __typename?: 'StockStatus', readonly buyable: boolean, readonly maxOrderQuantity?: number | null, readonly stockDate?: any | null, readonly stockNotificationEnabled?: boolean | null, readonly text?: string | null } | null, readonly warehouseStock?: ReadonlyArray<{ readonly __typename?: 'Warehouse', readonly stockLevel?: number | null, readonly location?: { readonly __typename?: 'Store', readonly id: number, readonly name?: string | null } | null } | null> | null, readonly variants?: { readonly __typename?: 'ProductVariants', readonly options: ReadonlyArray<{ readonly __typename?: 'ProductVariantOption', readonly name?: string | null, readonly values: ReadonlyArray<string | null> } | null>, readonly values: ReadonlyArray<{ readonly __typename?: 'ProductVariant', readonly values: ReadonlyArray<string | null>, readonly articleNumber: string, readonly warehouseStock?: ReadonlyArray<{ readonly __typename?: 'Warehouse', readonly stockLevel?: number | null, readonly location?: { readonly __typename?: 'Store', readonly id: number, readonly name?: string | null } | null } | null> | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly url?: any | null, readonly modifiedDate?: string | null } | null> | null, readonly stockStatus?: { readonly __typename?: 'StockStatus', readonly buyable: boolean, readonly maxOrderQuantity?: number | null, readonly stockDate?: any | null, readonly stockNotificationEnabled?: boolean | null, readonly text?: string | null } | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | null> } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null, readonly modifiedDate?: string | null } | null> | null, readonly relatedProducts?: ReadonlyArray<{ readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly isPackage?: boolean | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null, readonly modifiedDate?: string | null } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly canonicalCategory?: { readonly __typename?: 'Category', readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | null> | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly boolValue: boolean } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly htmlValue: string } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly listValues?: ReadonlyArray<string | null> | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly items?: ReadonlyArray<{ readonly __typename?: 'CustomMultiLevelListFieldItem', readonly id: number, readonly parentId?: number | null, readonly title: string, readonly value: string } | null> | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly preOrder?: { readonly __typename?: 'ProductPreOrder', readonly fromDate?: any | null, readonly toDate?: any | null } | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly customerComments?: ReadonlyArray<{ readonly __typename?: 'ProductComment', readonly name: string, readonly required: boolean } | null> | null, readonly inPackages?: ReadonlyArray<{ readonly __typename?: 'Product', readonly id: number, readonly name: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null }> | null, readonly configurations?: ReadonlyArray<{ readonly __typename?: 'ProductConfiguration', readonly name?: string | null, readonly options: ReadonlyArray<{ readonly __typename?: 'ProductConfigurationOption', readonly id: string, readonly name?: string | null, readonly price?: { readonly __typename?: 'Price', readonly exVat: any, readonly incVat: any, readonly vat: any } | null, readonly priceCalculation?: { readonly __typename?: 'ProductConfigurationPriceCalculation', readonly formula?: string | null, readonly id: string, readonly name?: string | null, readonly variables?: ReadonlyArray<{ readonly __typename?: 'ProductConfigurationPriceCalculationVariable', readonly id: string, readonly name?: string | null } | null> | null } | null } | null> } | null> | null, readonly campaigns?: ReadonlyArray<{ readonly __typename?: 'Category', readonly id: number, readonly name: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null } | null> | null, readonly package?: { readonly __typename?: 'Package', readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly discountValue?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly items: ReadonlyArray<{ readonly __typename?: 'PackageItem', readonly minQuantity: number, readonly product?: { readonly __typename?: 'Product', readonly id: number, readonly name: string, readonly articleNumber: string, readonly hasVariants: boolean, readonly hasConfigurations: boolean, readonly subName: string, readonly stockStatus?: { readonly __typename?: 'StockStatus', readonly buyable: boolean, readonly maxOrderQuantity?: number | null, readonly stockDate?: any | null, readonly stockNotificationEnabled?: boolean | null, readonly text?: string | null } | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string, readonly id: string } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly variants?: { readonly __typename?: 'ProductVariants', readonly options: ReadonlyArray<{ readonly __typename?: 'ProductVariantOption', readonly name?: string | null, readonly values: ReadonlyArray<string | null> } | null>, readonly values: ReadonlyArray<{ readonly __typename?: 'ProductVariant', readonly articleNumber: string, readonly values: ReadonlyArray<string | null>, readonly stockStatus?: { readonly __typename?: 'StockStatus', readonly buyable: boolean, readonly maxOrderQuantity?: number | null, readonly stockDate?: any | null, readonly stockNotificationEnabled?: boolean | null, readonly text?: string | null } | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | null> } | null } | null, readonly discount?: { readonly __typename?: 'PackageDiscountPercentage', readonly percentage: any } | { readonly __typename?: 'PackageDiscountValue', readonly valueExVat: any, readonly valueIncVat: any, readonly valueVat: any } | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null }> } | null };

export type StartPageFragment = { readonly __typename?: 'StartPage', readonly isActive?: boolean | null, readonly breadcrumbText?: string | null, readonly name: string, readonly content?: string | null, readonly head?: { readonly __typename?: 'HtmlHead', readonly title?: string | null, readonly metaTags?: ReadonlyArray<{ readonly __typename?: 'HtmlMetaTag', readonly name?: string | null, readonly content?: string | null } | null> | null } | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly canonicalPath?: string | null, readonly alternateRoutes?: ReadonlyArray<{ readonly __typename?: 'AlternateRoute', readonly channelId?: number | null, readonly culture?: string | null, readonly route?: string | null, readonly alias?: string | null } | null> | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'Image', readonly url?: any | null, readonly width?: number | null, readonly title?: string | null, readonly height?: number | null } | null> | null, readonly data?: { readonly __typename?: 'Content', readonly id: string, readonly items?: ReadonlyArray<{ readonly __typename?: 'ContentItem', readonly type: string, readonly children?: ReadonlyArray<{ readonly __typename?: 'ContentItem', readonly type: string, readonly properties?: ReadonlyArray<{ readonly __typename?: 'ContentItemProperty', readonly name: string, readonly type: string, readonly valueType?: ContentPropertyValueType | null, readonly value?: { readonly __typename?: 'BoolValue', readonly boolValue?: boolean | null } | { readonly __typename?: 'Category', readonly name: string, readonly images?: ReadonlyArray<{ readonly __typename?: 'CategoryImage', readonly url?: any | null } | null> | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | { readonly __typename?: 'ImageValue', readonly value?: string | null, readonly focalPointX?: number | null, readonly focalPointY?: number | null } | { readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly shortDescription: string, readonly description: string, readonly mainHeader: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string, readonly breadcrumbs?: ReadonlyArray<string | null> | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | { readonly __typename?: 'StringValue', readonly value?: string | null } | null } | null> | null } | null> | null, readonly properties?: ReadonlyArray<{ readonly __typename?: 'ContentItemProperty', readonly name: string, readonly type: string, readonly valueType?: ContentPropertyValueType | null, readonly value?: { readonly __typename?: 'BoolValue', readonly boolValue?: boolean | null } | { readonly __typename?: 'Category', readonly name: string, readonly images?: ReadonlyArray<{ readonly __typename?: 'CategoryImage', readonly url?: any | null } | null> | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | { readonly __typename?: 'ImageValue', readonly value?: string | null, readonly focalPointX?: number | null, readonly focalPointY?: number | null } | { readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly shortDescription: string, readonly description: string, readonly mainHeader: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string, readonly breadcrumbs?: ReadonlyArray<string | null> | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | { readonly __typename?: 'StringValue', readonly value?: string | null } | null } | null> | null } | null> | null } | null };

export type WarehouseStockFragment = { readonly __typename?: 'Warehouse', readonly stockLevel?: number | null, readonly location?: { readonly __typename?: 'Store', readonly id: number, readonly name?: string | null } | null };

export type BadgeFragment = { readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null };

export type CartCoreFragmentFragment = { readonly __typename?: 'Cart', readonly id?: string | null, readonly externalCheckoutUrl?: any | null, readonly totalQuantity?: number | null, readonly productTotal?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly productPreviousTotal?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly discountTotal?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly aggregatedDiscounts?: ReadonlyArray<{ readonly __typename?: 'Discount', readonly name?: string | null, readonly description?: string | null, readonly value?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly campaign?: { readonly __typename?: 'Category', readonly name: string } | null } | null> | null, readonly items?: ReadonlyArray<{ readonly __typename?: 'CartItem', readonly id: string, readonly quantity: number, readonly articleNumber: string, readonly subHeading?: string | null, readonly variant?: { readonly __typename?: 'ProductVariant', readonly values: ReadonlyArray<string | null>, readonly articleNumber: string, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly url?: any | null, readonly alt?: string | null, readonly title?: string | null } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | null, readonly configurations?: ReadonlyArray<{ readonly __typename?: 'SelectedProductConfiguration', readonly name?: string | null, readonly option: { readonly __typename?: 'SelectedProductConfigurationOption', readonly id: string, readonly name?: string | null } } | null> | null, readonly discounts?: ReadonlyArray<{ readonly __typename?: 'Discount', readonly name?: string | null, readonly description?: string | null, readonly value?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | null> | null, readonly discount?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly total: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any }, readonly previousTotal: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any }, readonly product?: { readonly __typename?: 'Product', readonly id: number, readonly name: string, readonly articleNumber: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly canonicalCategory?: { readonly __typename?: 'Category', readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | null } | null> | null };

export type CurrencyFragmentFragment = { readonly __typename?: 'Currency', readonly id: string, readonly name?: string | null, readonly isDefault?: boolean | null, readonly format?: { readonly __typename?: 'CurrencyFormat', readonly code: string, readonly decimals: number } | null };

export type ChannelsFragmentFragment = { readonly __typename?: 'Channel', readonly id: number, readonly name?: string | null, readonly url?: any | null, readonly isDefault?: boolean | null, readonly displayName?: string | null, readonly imageUrl?: string | null, readonly requiresAuth?: boolean | null, readonly countries?: ReadonlyArray<{ readonly __typename?: 'Country', readonly name?: string | null, readonly code?: string | null, readonly isDefault?: boolean | null } | null> | null, readonly languages?: ReadonlyArray<{ readonly __typename?: 'Language', readonly culture: string, readonly name: string, readonly isDefault?: boolean | null } | null> | null, readonly currencies?: ReadonlyArray<{ readonly __typename?: 'Currency', readonly id: string, readonly name?: string | null, readonly isDefault?: boolean | null, readonly format?: { readonly __typename?: 'CurrencyFormat', readonly code: string, readonly decimals: number } | null } | null> | null, readonly defaultCurrency?: { readonly __typename?: 'Currency', readonly id: string, readonly name?: string | null, readonly isDefault?: boolean | null, readonly format?: { readonly __typename?: 'CurrencyFormat', readonly code: string, readonly decimals: number } | null } | null, readonly defaultLanguage?: { readonly __typename?: 'Language', readonly culture: string, readonly name: string, readonly isDefault?: boolean | null } | null, readonly settings?: { readonly __typename?: 'ChannelSettings', readonly nostoAccountId?: string | null, readonly pricesIncVat?: boolean | null, readonly tracking?: { readonly __typename?: 'Tracking', readonly ga?: { readonly __typename?: 'GoogleAnalytics', readonly trackingId?: string | null, readonly useArticleNumberAsId?: boolean | null } | null, readonly gtm?: { readonly __typename?: 'GoogleTagManager', readonly containerId?: string | null } | null, readonly fca?: { readonly __typename?: 'FacebookConversionsApi', readonly accessToken?: string | null, readonly pixelId?: string | null } | null } | null } | null };

export type CommentsFragmentFragment = { readonly __typename?: 'Product', readonly customerComments?: ReadonlyArray<{ readonly __typename?: 'ProductComment', readonly name: string, readonly required: boolean } | null> | null };

type Head_Category_Fragment = { readonly __typename?: 'Category', readonly head?: { readonly __typename?: 'HtmlHead', readonly title?: string | null, readonly metaTags?: ReadonlyArray<{ readonly __typename?: 'HtmlMetaTag', readonly name?: string | null, readonly content?: string | null } | null> | null } | null };

type Head_Page_Fragment = { readonly __typename?: 'Page', readonly head?: { readonly __typename?: 'HtmlHead', readonly title?: string | null, readonly metaTags?: ReadonlyArray<{ readonly __typename?: 'HtmlMetaTag', readonly name?: string | null, readonly content?: string | null } | null> | null } | null };

type Head_Product_Fragment = { readonly __typename?: 'Product', readonly head?: { readonly __typename?: 'HtmlHead', readonly title?: string | null, readonly metaTags?: ReadonlyArray<{ readonly __typename?: 'HtmlMetaTag', readonly name?: string | null, readonly content?: string | null } | null> | null } | null };

type Head_StartPage_Fragment = { readonly __typename?: 'StartPage', readonly head?: { readonly __typename?: 'HtmlHead', readonly title?: string | null, readonly metaTags?: ReadonlyArray<{ readonly __typename?: 'HtmlMetaTag', readonly name?: string | null, readonly content?: string | null } | null> | null } | null };

export type HeadFragment = Head_Category_Fragment | Head_Page_Fragment | Head_Product_Fragment | Head_StartPage_Fragment;

export type PriceFragment = { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any };

export type ProductCampaignFragment = { readonly __typename?: 'Product', readonly campaigns?: ReadonlyArray<{ readonly __typename?: 'Category', readonly id: number, readonly name: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null } | null> | null };

export type ProductConfigurationsFragment = { readonly __typename?: 'Product', readonly hasConfigurations: boolean, readonly configurations?: ReadonlyArray<{ readonly __typename?: 'ProductConfiguration', readonly name?: string | null, readonly options: ReadonlyArray<{ readonly __typename?: 'ProductConfigurationOption', readonly id: string, readonly name?: string | null, readonly price?: { readonly __typename?: 'Price', readonly exVat: any, readonly incVat: any, readonly vat: any } | null, readonly priceCalculation?: { readonly __typename?: 'ProductConfigurationPriceCalculation', readonly formula?: string | null, readonly id: string, readonly name?: string | null, readonly variables?: ReadonlyArray<{ readonly __typename?: 'ProductConfigurationPriceCalculationVariable', readonly id: string, readonly name?: string | null } | null> | null } | null } | null> } | null> | null };

export type MinimalProductListDetailFragment = { readonly __typename?: 'CustomerProductList', readonly id: string, readonly name?: string | null, readonly items?: ReadonlyArray<{ readonly __typename?: 'CustomerProductListItem', readonly variant?: { readonly __typename?: 'ProductVariant', readonly articleNumber: string } | null, readonly product?: { readonly __typename?: 'Product', readonly articleNumber: string } | null } | null> | null };

export type VariantDetailFragment = { readonly __typename?: 'ProductVariant', readonly id: string, readonly articleNumber: string, readonly values: ReadonlyArray<string | null>, readonly stockStatus?: { readonly __typename?: 'StockStatus', readonly buyable: boolean, readonly text?: string | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null };

export type VariantsDetailFragment = { readonly __typename?: 'ProductVariants', readonly options: ReadonlyArray<{ readonly __typename?: 'ProductVariantOption', readonly name?: string | null, readonly values: ReadonlyArray<string | null> } | null>, readonly values: ReadonlyArray<{ readonly __typename?: 'ProductVariant', readonly id: string, readonly articleNumber: string, readonly values: ReadonlyArray<string | null>, readonly stockStatus?: { readonly __typename?: 'StockStatus', readonly buyable: boolean, readonly text?: string | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null } | null> };

export type ProductDetailFragment = { readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly hasConfigurations: boolean, readonly hasVariants: boolean, readonly isPreOrder?: boolean | null, readonly isPackage?: boolean | null, readonly stockStatus?: { readonly __typename?: 'StockStatus', readonly buyable: boolean, readonly text?: string | null } | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string } | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly variants?: { readonly __typename?: 'ProductVariants', readonly options: ReadonlyArray<{ readonly __typename?: 'ProductVariantOption', readonly name?: string | null, readonly values: ReadonlyArray<string | null> } | null>, readonly values: ReadonlyArray<{ readonly __typename?: 'ProductVariant', readonly id: string, readonly articleNumber: string, readonly values: ReadonlyArray<string | null>, readonly stockStatus?: { readonly __typename?: 'StockStatus', readonly buyable: boolean, readonly text?: string | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null } | null> } | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null };

export type ProductListFragmentFragment = { readonly __typename?: 'CustomerProductList', readonly id: string, readonly description?: string | null, readonly name?: string | null, readonly shareToken?: string | null, readonly items?: ReadonlyArray<{ readonly __typename?: 'CustomerProductListItem', readonly quantity?: number | null, readonly description?: string | null, readonly product?: { readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly hasConfigurations: boolean, readonly hasVariants: boolean, readonly isPreOrder?: boolean | null, readonly isPackage?: boolean | null, readonly stockStatus?: { readonly __typename?: 'StockStatus', readonly buyable: boolean, readonly text?: string | null } | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string } | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly variants?: { readonly __typename?: 'ProductVariants', readonly options: ReadonlyArray<{ readonly __typename?: 'ProductVariantOption', readonly name?: string | null, readonly values: ReadonlyArray<string | null> } | null>, readonly values: ReadonlyArray<{ readonly __typename?: 'ProductVariant', readonly id: string, readonly articleNumber: string, readonly values: ReadonlyArray<string | null>, readonly stockStatus?: { readonly __typename?: 'StockStatus', readonly buyable: boolean, readonly text?: string | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null } | null> } | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | null, readonly variant?: { readonly __typename?: 'ProductVariant', readonly id: string, readonly articleNumber: string, readonly values: ReadonlyArray<string | null>, readonly stockStatus?: { readonly __typename?: 'StockStatus', readonly buyable: boolean, readonly text?: string | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null } | null } | null> | null };

export type ProductMetadataFragment = { readonly __typename?: 'Product', readonly name: string, readonly articleNumber: string, readonly description: string, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null, readonly canonicalCategory?: { readonly __typename?: 'Category', readonly name: string } | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null };

export type ProductPriceFragment = { readonly __typename?: 'Product', readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null };

export type ProductVariantPriceFragment = { readonly __typename?: 'ProductVariant', readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null };

export type RouteCrumbFragment = { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string, readonly canonicalPath?: string | null, readonly parents?: ReadonlyArray<{ readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string, readonly object?: { readonly __typename?: 'Category', readonly breadcrumbText?: string | null } | { readonly __typename?: 'Page', readonly breadcrumbText?: string | null } | { readonly __typename?: 'Product', readonly breadcrumbText?: string | null } | { readonly __typename?: 'StartPage', readonly breadcrumbText?: string | null } | null } | null> | null, readonly alternateRoutes?: ReadonlyArray<{ readonly __typename?: 'AlternateRoute', readonly channelId?: number | null, readonly culture?: string | null, readonly route?: string | null, readonly alias?: string | null } | null> | null };

export type RouteMetaFragment = { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string, readonly canonicalPath?: string | null, readonly breadcrumbs?: ReadonlyArray<string | null> | null, readonly parents?: ReadonlyArray<{ readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string } | null> | null, readonly alternateRoutes?: ReadonlyArray<{ readonly __typename?: 'AlternateRoute', readonly channelId?: number | null, readonly culture?: string | null, readonly route?: string | null, readonly alias?: string | null } | null> | null };

export type StockStatusFragment = { readonly __typename?: 'StockStatus', readonly buyable: boolean, readonly maxOrderQuantity?: number | null, readonly stockDate?: any | null, readonly stockNotificationEnabled?: boolean | null, readonly text?: string | null };

export type AddMultipleToCartMutationVariables = Exact<{
  cartId?: InputMaybe<Scalars['String']>;
  items: ReadonlyArray<InputMaybe<AddMultipleToCartInput>> | InputMaybe<AddMultipleToCartInput>;
}>;


export type AddMultipleToCartMutation = { readonly __typename?: 'Mutation', readonly addMultipleToCart?: { readonly __typename?: 'CartMutation', readonly cart?: { readonly __typename?: 'Cart', readonly id?: string | null, readonly externalCheckoutUrl?: any | null, readonly totalQuantity?: number | null, readonly productTotal?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly productPreviousTotal?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly discountTotal?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly aggregatedDiscounts?: ReadonlyArray<{ readonly __typename?: 'Discount', readonly name?: string | null, readonly description?: string | null, readonly value?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly campaign?: { readonly __typename?: 'Category', readonly name: string } | null } | null> | null, readonly items?: ReadonlyArray<{ readonly __typename?: 'CartItem', readonly id: string, readonly quantity: number, readonly articleNumber: string, readonly subHeading?: string | null, readonly variant?: { readonly __typename?: 'ProductVariant', readonly values: ReadonlyArray<string | null>, readonly articleNumber: string, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly url?: any | null, readonly alt?: string | null, readonly title?: string | null } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | null, readonly configurations?: ReadonlyArray<{ readonly __typename?: 'SelectedProductConfiguration', readonly name?: string | null, readonly option: { readonly __typename?: 'SelectedProductConfigurationOption', readonly id: string, readonly name?: string | null } } | null> | null, readonly discounts?: ReadonlyArray<{ readonly __typename?: 'Discount', readonly name?: string | null, readonly description?: string | null, readonly value?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | null> | null, readonly discount?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly total: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any }, readonly previousTotal: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any }, readonly product?: { readonly __typename?: 'Product', readonly id: number, readonly name: string, readonly articleNumber: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly canonicalCategory?: { readonly __typename?: 'Category', readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | null } | null> | null } | null } | null };

export type AddToCartMutationVariables = Exact<{
  input: AddToCartInput;
}>;


export type AddToCartMutation = { readonly __typename?: 'Mutation', readonly addToCart?: { readonly __typename?: 'CartMutation', readonly cart?: { readonly __typename?: 'Cart', readonly id?: string | null, readonly externalCheckoutUrl?: any | null, readonly totalQuantity?: number | null, readonly productTotal?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly productPreviousTotal?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly discountTotal?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly aggregatedDiscounts?: ReadonlyArray<{ readonly __typename?: 'Discount', readonly name?: string | null, readonly description?: string | null, readonly value?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly campaign?: { readonly __typename?: 'Category', readonly name: string } | null } | null> | null, readonly items?: ReadonlyArray<{ readonly __typename?: 'CartItem', readonly id: string, readonly quantity: number, readonly articleNumber: string, readonly subHeading?: string | null, readonly variant?: { readonly __typename?: 'ProductVariant', readonly values: ReadonlyArray<string | null>, readonly articleNumber: string, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly url?: any | null, readonly alt?: string | null, readonly title?: string | null } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | null, readonly configurations?: ReadonlyArray<{ readonly __typename?: 'SelectedProductConfiguration', readonly name?: string | null, readonly option: { readonly __typename?: 'SelectedProductConfigurationOption', readonly id: string, readonly name?: string | null } } | null> | null, readonly discounts?: ReadonlyArray<{ readonly __typename?: 'Discount', readonly name?: string | null, readonly description?: string | null, readonly value?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | null> | null, readonly discount?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly total: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any }, readonly previousTotal: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any }, readonly product?: { readonly __typename?: 'Product', readonly id: number, readonly name: string, readonly articleNumber: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly canonicalCategory?: { readonly __typename?: 'Category', readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | null } | null> | null } | null } | null };

export type SubscribeToNewsletterMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type SubscribeToNewsletterMutation = { readonly __typename?: 'Mutation', readonly subscribeToNewsletter?: boolean | null };

export type AutocompleteQueryVariables = Exact<{
  term: Scalars['String'];
}>;


export type AutocompleteQuery = { readonly __typename?: 'Query', readonly searchAutoComplete?: { readonly __typename?: 'SearchAutoCompleteResult', readonly categories?: { readonly __typename?: 'CategoryAutoCompleteResult', readonly result?: ReadonlyArray<{ readonly __typename?: 'Category', readonly id: number, readonly name: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly slug: string, readonly path: string, readonly breadcrumbs?: ReadonlyArray<string | null> | null } | null } | null> | null } | null, readonly products?: { readonly __typename?: 'ProductAutoCompleteResult', readonly result: ReadonlyArray<{ readonly __typename?: 'Product', readonly name: string, readonly id: number, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly slug: string, readonly path: string } | null } | null> } | null } | null };

export type CartQueryVariables = Exact<{
  cartId?: InputMaybe<Scalars['String']>;
}>;


export type CartQuery = { readonly __typename?: 'Query', readonly cart?: { readonly __typename?: 'Cart', readonly id?: string | null, readonly externalCheckoutUrl?: any | null, readonly totalQuantity?: number | null, readonly productTotal?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly productPreviousTotal?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly discountTotal?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly aggregatedDiscounts?: ReadonlyArray<{ readonly __typename?: 'Discount', readonly name?: string | null, readonly description?: string | null, readonly value?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly campaign?: { readonly __typename?: 'Category', readonly name: string } | null } | null> | null, readonly items?: ReadonlyArray<{ readonly __typename?: 'CartItem', readonly id: string, readonly quantity: number, readonly articleNumber: string, readonly subHeading?: string | null, readonly variant?: { readonly __typename?: 'ProductVariant', readonly values: ReadonlyArray<string | null>, readonly articleNumber: string, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly url?: any | null, readonly alt?: string | null, readonly title?: string | null } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | null, readonly configurations?: ReadonlyArray<{ readonly __typename?: 'SelectedProductConfiguration', readonly name?: string | null, readonly option: { readonly __typename?: 'SelectedProductConfigurationOption', readonly id: string, readonly name?: string | null } } | null> | null, readonly discounts?: ReadonlyArray<{ readonly __typename?: 'Discount', readonly name?: string | null, readonly description?: string | null, readonly value?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | null> | null, readonly discount?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly total: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any }, readonly previousTotal: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any }, readonly product?: { readonly __typename?: 'Product', readonly id: number, readonly name: string, readonly articleNumber: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly canonicalCategory?: { readonly __typename?: 'Category', readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | null } | null> | null } | null };

export type NavTreeQueryVariables = Exact<{
  root?: InputMaybe<Scalars['Int']>;
  levels?: InputMaybe<Scalars['Int']>;
  includeHidden?: InputMaybe<Scalars['Boolean']>;
}>;


export type NavTreeQuery = { readonly __typename?: 'Query', readonly categories: ReadonlyArray<{ readonly __typename?: 'Category', readonly id: number, readonly name: string, readonly level: number, readonly parentId?: number | null, readonly hasSubcategories?: boolean | null, readonly subcategories?: ReadonlyArray<{ readonly __typename?: 'Category', readonly id: number, readonly name: string, readonly level: number, readonly parentId?: number | null, readonly hasSubcategories?: boolean | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null } | null> | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null } | null> };

export type CategoriesWithSubcategoriesFragment = { readonly __typename?: 'Category', readonly id: number, readonly name: string, readonly level: number, readonly parentId?: number | null, readonly hasSubcategories?: boolean | null, readonly subcategories?: ReadonlyArray<{ readonly __typename?: 'Category', readonly id: number, readonly name: string, readonly level: number, readonly parentId?: number | null, readonly hasSubcategories?: boolean | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null } | null> | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null };

export type CategoryDetailFragment = { readonly __typename?: 'Category', readonly id: number, readonly name: string, readonly level: number, readonly parentId?: number | null, readonly hasSubcategories?: boolean | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null };

export type PagesQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesQuery = { readonly __typename?: 'Query', readonly pages: ReadonlyArray<{ readonly __typename?: 'Page', readonly name: string, readonly id: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null, readonly subPages?: ReadonlyArray<{ readonly __typename?: 'Page', readonly id: string, readonly name: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null }> | null } | null> };

export type ProductVariantsQueryVariables = Exact<{
  articleNumber: Scalars['String'];
}>;


export type ProductVariantsQuery = { readonly __typename?: 'Query', readonly product?: { readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly variants?: { readonly __typename?: 'ProductVariants', readonly options: ReadonlyArray<{ readonly __typename?: 'ProductVariantOption', readonly name?: string | null, readonly values: ReadonlyArray<string | null> } | null>, readonly values: ReadonlyArray<{ readonly __typename?: 'ProductVariant', readonly articleNumber: string, readonly values: ReadonlyArray<string | null> } | null> } | null } | null };

export type RouteQueryVariables = Exact<{
  path: Scalars['String'];
  first?: InputMaybe<Scalars['Paging']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProductOrderOptions>;
  orderByDirection?: InputMaybe<SortDirection>;
  filters?: InputMaybe<FilterInput>;
}>;


export type RouteQuery = { readonly __typename?: 'Query', readonly route?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string, readonly canonicalPath?: string | null, readonly breadcrumbs?: ReadonlyArray<string | null> | null, readonly object?: { readonly __typename: 'Category', readonly id: number, readonly name: string, readonly mainHeader?: string | null, readonly content?: string | null, readonly breadcrumbText?: string | null, readonly isDynamic: boolean, readonly head?: { readonly __typename?: 'HtmlHead', readonly title?: string | null, readonly metaTags?: ReadonlyArray<{ readonly __typename?: 'HtmlMetaTag', readonly name?: string | null, readonly content?: string | null } | null> | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'CategoryImage', readonly width?: number | null, readonly url?: any | null } | null> | null, readonly data?: { readonly __typename?: 'Content', readonly id: string, readonly items?: ReadonlyArray<{ readonly __typename?: 'ContentItem', readonly type: string, readonly children?: ReadonlyArray<{ readonly __typename?: 'ContentItem', readonly type: string, readonly properties?: ReadonlyArray<{ readonly __typename?: 'ContentItemProperty', readonly name: string, readonly type: string, readonly valueType?: ContentPropertyValueType | null, readonly value?: { readonly __typename?: 'BoolValue', readonly boolValue?: boolean | null } | { readonly __typename?: 'Category', readonly name: string, readonly images?: ReadonlyArray<{ readonly __typename?: 'CategoryImage', readonly url?: any | null } | null> | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | { readonly __typename?: 'ImageValue', readonly value?: string | null, readonly focalPointX?: number | null, readonly focalPointY?: number | null } | { readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly shortDescription: string, readonly description: string, readonly mainHeader: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string, readonly breadcrumbs?: ReadonlyArray<string | null> | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | { readonly __typename?: 'StringValue', readonly value?: string | null } | null } | null> | null } | null> | null, readonly properties?: ReadonlyArray<{ readonly __typename?: 'ContentItemProperty', readonly name: string, readonly type: string, readonly valueType?: ContentPropertyValueType | null, readonly value?: { readonly __typename?: 'BoolValue', readonly boolValue?: boolean | null } | { readonly __typename?: 'Category', readonly name: string, readonly images?: ReadonlyArray<{ readonly __typename?: 'CategoryImage', readonly url?: any | null } | null> | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | { readonly __typename?: 'ImageValue', readonly value?: string | null, readonly focalPointX?: number | null, readonly focalPointY?: number | null } | { readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly shortDescription: string, readonly description: string, readonly mainHeader: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string, readonly breadcrumbs?: ReadonlyArray<string | null> | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | { readonly __typename?: 'StringValue', readonly value?: string | null } | null } | null> | null } | null> | null } | null, readonly products?: { readonly __typename?: 'PagedResult', readonly totalResults?: number | null, readonly sortOrders?: ReadonlyArray<{ readonly __typename?: 'ProductSortOrder', readonly text: string, readonly defaultDirection: SortDirection, readonly value: ProductOrderOptions } | null> | null, readonly filters?: ReadonlyArray<{ readonly __typename: 'BooleanFilter', readonly default?: boolean | null, readonly id: string, readonly name: string } | { readonly __typename: 'ListFilter', readonly id: string, readonly name: string, readonly items: ReadonlyArray<{ readonly __typename?: 'ListFilterItem', readonly id: string, readonly text: string, readonly value: string, readonly resultCount?: number | null } | null> } | { readonly __typename: 'MultiListFilter', readonly id: string, readonly name: string, readonly lists: ReadonlyArray<{ readonly __typename?: 'MultiListFilterList', readonly id: string, readonly name: string, readonly items: ReadonlyArray<{ readonly __typename?: 'ListFilterItem', readonly id: string, readonly value: string, readonly text: string, readonly resultCount?: number | null } | null> } | null> } | { readonly __typename: 'NumericRangeFilter', readonly id: string, readonly min: any, readonly max: any, readonly name: string } | null> | null, readonly result: ReadonlyArray<{ readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly isPackage?: boolean | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null, readonly modifiedDate?: string | null } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly canonicalCategory?: { readonly __typename?: 'Category', readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | null> } | null } | { readonly __typename: 'Page', readonly name: string, readonly mainHeader?: string | null, readonly content?: string | null, readonly pageId: string, readonly head?: { readonly __typename?: 'HtmlHead', readonly title?: string | null, readonly metaTags?: ReadonlyArray<{ readonly __typename?: 'HtmlMetaTag', readonly name?: string | null, readonly content?: string | null } | null> | null } | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'Image', readonly url?: any | null } | null> | null, readonly data?: { readonly __typename?: 'Content', readonly id: string, readonly items?: ReadonlyArray<{ readonly __typename?: 'ContentItem', readonly type: string, readonly children?: ReadonlyArray<{ readonly __typename?: 'ContentItem', readonly type: string, readonly properties?: ReadonlyArray<{ readonly __typename?: 'ContentItemProperty', readonly name: string, readonly type: string, readonly valueType?: ContentPropertyValueType | null, readonly value?: { readonly __typename?: 'BoolValue', readonly boolValue?: boolean | null } | { readonly __typename?: 'Category', readonly name: string, readonly images?: ReadonlyArray<{ readonly __typename?: 'CategoryImage', readonly url?: any | null } | null> | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | { readonly __typename?: 'ImageValue', readonly value?: string | null, readonly focalPointX?: number | null, readonly focalPointY?: number | null } | { readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly shortDescription: string, readonly description: string, readonly mainHeader: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string, readonly breadcrumbs?: ReadonlyArray<string | null> | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | { readonly __typename?: 'StringValue', readonly value?: string | null } | null } | null> | null } | null> | null, readonly properties?: ReadonlyArray<{ readonly __typename?: 'ContentItemProperty', readonly name: string, readonly type: string, readonly valueType?: ContentPropertyValueType | null, readonly value?: { readonly __typename?: 'BoolValue', readonly boolValue?: boolean | null } | { readonly __typename?: 'Category', readonly name: string, readonly images?: ReadonlyArray<{ readonly __typename?: 'CategoryImage', readonly url?: any | null } | null> | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | { readonly __typename?: 'ImageValue', readonly value?: string | null, readonly focalPointX?: number | null, readonly focalPointY?: number | null } | { readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly shortDescription: string, readonly description: string, readonly mainHeader: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string, readonly breadcrumbs?: ReadonlyArray<string | null> | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | { readonly __typename?: 'StringValue', readonly value?: string | null } | null } | null> | null } | null> | null } | null, readonly parent?: { readonly __typename?: 'Page', readonly id: string, readonly name: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null, readonly subPages?: ReadonlyArray<{ readonly __typename?: 'Page', readonly id: string, readonly name: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null }> | null } | null, readonly subPages?: ReadonlyArray<{ readonly __typename?: 'Page', readonly id: string, readonly name: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null }> | null } | { readonly __typename: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly breadcrumbText?: string | null, readonly shortDescription: string, readonly description: string, readonly hasVariants: boolean, readonly isPackage?: boolean | null, readonly hasConfigurations: boolean, readonly head?: { readonly __typename?: 'HtmlHead', readonly title?: string | null, readonly metaTags?: ReadonlyArray<{ readonly __typename?: 'HtmlMetaTag', readonly name?: string | null, readonly content?: string | null } | null> | null } | null, readonly canonicalCategory?: { readonly __typename?: 'Category', readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | null, readonly categories?: ReadonlyArray<{ readonly __typename?: 'Category', readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | null> | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string, readonly id: string, readonly breadcrumbs?: ReadonlyArray<string | null> | null } | null, readonly stockStatus?: { readonly __typename?: 'StockStatus', readonly buyable: boolean, readonly maxOrderQuantity?: number | null, readonly stockDate?: any | null, readonly stockNotificationEnabled?: boolean | null, readonly text?: string | null } | null, readonly warehouseStock?: ReadonlyArray<{ readonly __typename?: 'Warehouse', readonly stockLevel?: number | null, readonly location?: { readonly __typename?: 'Store', readonly id: number, readonly name?: string | null } | null } | null> | null, readonly variants?: { readonly __typename?: 'ProductVariants', readonly options: ReadonlyArray<{ readonly __typename?: 'ProductVariantOption', readonly name?: string | null, readonly values: ReadonlyArray<string | null> } | null>, readonly values: ReadonlyArray<{ readonly __typename?: 'ProductVariant', readonly values: ReadonlyArray<string | null>, readonly articleNumber: string, readonly warehouseStock?: ReadonlyArray<{ readonly __typename?: 'Warehouse', readonly stockLevel?: number | null, readonly location?: { readonly __typename?: 'Store', readonly id: number, readonly name?: string | null } | null } | null> | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly url?: any | null, readonly modifiedDate?: string | null } | null> | null, readonly stockStatus?: { readonly __typename?: 'StockStatus', readonly buyable: boolean, readonly maxOrderQuantity?: number | null, readonly stockDate?: any | null, readonly stockNotificationEnabled?: boolean | null, readonly text?: string | null } | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | null> } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null, readonly modifiedDate?: string | null } | null> | null, readonly relatedProducts?: ReadonlyArray<{ readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly isPackage?: boolean | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null, readonly modifiedDate?: string | null } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly canonicalCategory?: { readonly __typename?: 'Category', readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | null> | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly boolValue: boolean } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly htmlValue: string } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly listValues?: ReadonlyArray<string | null> | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly items?: ReadonlyArray<{ readonly __typename?: 'CustomMultiLevelListFieldItem', readonly id: number, readonly parentId?: number | null, readonly title: string, readonly value: string } | null> | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly preOrder?: { readonly __typename?: 'ProductPreOrder', readonly fromDate?: any | null, readonly toDate?: any | null } | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly customerComments?: ReadonlyArray<{ readonly __typename?: 'ProductComment', readonly name: string, readonly required: boolean } | null> | null, readonly inPackages?: ReadonlyArray<{ readonly __typename?: 'Product', readonly id: number, readonly name: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null }> | null, readonly configurations?: ReadonlyArray<{ readonly __typename?: 'ProductConfiguration', readonly name?: string | null, readonly options: ReadonlyArray<{ readonly __typename?: 'ProductConfigurationOption', readonly id: string, readonly name?: string | null, readonly price?: { readonly __typename?: 'Price', readonly exVat: any, readonly incVat: any, readonly vat: any } | null, readonly priceCalculation?: { readonly __typename?: 'ProductConfigurationPriceCalculation', readonly formula?: string | null, readonly id: string, readonly name?: string | null, readonly variables?: ReadonlyArray<{ readonly __typename?: 'ProductConfigurationPriceCalculationVariable', readonly id: string, readonly name?: string | null } | null> | null } | null } | null> } | null> | null, readonly campaigns?: ReadonlyArray<{ readonly __typename?: 'Category', readonly id: number, readonly name: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string } | null } | null> | null, readonly package?: { readonly __typename?: 'Package', readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly discountValue?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly items: ReadonlyArray<{ readonly __typename?: 'PackageItem', readonly minQuantity: number, readonly product?: { readonly __typename?: 'Product', readonly id: number, readonly name: string, readonly articleNumber: string, readonly hasVariants: boolean, readonly hasConfigurations: boolean, readonly subName: string, readonly stockStatus?: { readonly __typename?: 'StockStatus', readonly buyable: boolean, readonly maxOrderQuantity?: number | null, readonly stockDate?: any | null, readonly stockNotificationEnabled?: boolean | null, readonly text?: string | null } | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string, readonly id: string } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly variants?: { readonly __typename?: 'ProductVariants', readonly options: ReadonlyArray<{ readonly __typename?: 'ProductVariantOption', readonly name?: string | null, readonly values: ReadonlyArray<string | null> } | null>, readonly values: ReadonlyArray<{ readonly __typename?: 'ProductVariant', readonly articleNumber: string, readonly values: ReadonlyArray<string | null>, readonly stockStatus?: { readonly __typename?: 'StockStatus', readonly buyable: boolean, readonly maxOrderQuantity?: number | null, readonly stockDate?: any | null, readonly stockNotificationEnabled?: boolean | null, readonly text?: string | null } | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | null> } | null } | null, readonly discount?: { readonly __typename?: 'PackageDiscountPercentage', readonly percentage: any } | { readonly __typename?: 'PackageDiscountValue', readonly valueExVat: any, readonly valueIncVat: any, readonly valueVat: any } | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null }> } | null } | { readonly __typename: 'StartPage', readonly isActive?: boolean | null, readonly breadcrumbText?: string | null, readonly name: string, readonly content?: string | null, readonly head?: { readonly __typename?: 'HtmlHead', readonly title?: string | null, readonly metaTags?: ReadonlyArray<{ readonly __typename?: 'HtmlMetaTag', readonly name?: string | null, readonly content?: string | null } | null> | null } | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly canonicalPath?: string | null, readonly alternateRoutes?: ReadonlyArray<{ readonly __typename?: 'AlternateRoute', readonly channelId?: number | null, readonly culture?: string | null, readonly route?: string | null, readonly alias?: string | null } | null> | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'Image', readonly url?: any | null, readonly width?: number | null, readonly title?: string | null, readonly height?: number | null } | null> | null, readonly data?: { readonly __typename?: 'Content', readonly id: string, readonly items?: ReadonlyArray<{ readonly __typename?: 'ContentItem', readonly type: string, readonly children?: ReadonlyArray<{ readonly __typename?: 'ContentItem', readonly type: string, readonly properties?: ReadonlyArray<{ readonly __typename?: 'ContentItemProperty', readonly name: string, readonly type: string, readonly valueType?: ContentPropertyValueType | null, readonly value?: { readonly __typename?: 'BoolValue', readonly boolValue?: boolean | null } | { readonly __typename?: 'Category', readonly name: string, readonly images?: ReadonlyArray<{ readonly __typename?: 'CategoryImage', readonly url?: any | null } | null> | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | { readonly __typename?: 'ImageValue', readonly value?: string | null, readonly focalPointX?: number | null, readonly focalPointY?: number | null } | { readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly shortDescription: string, readonly description: string, readonly mainHeader: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string, readonly breadcrumbs?: ReadonlyArray<string | null> | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | { readonly __typename?: 'StringValue', readonly value?: string | null } | null } | null> | null } | null> | null, readonly properties?: ReadonlyArray<{ readonly __typename?: 'ContentItemProperty', readonly name: string, readonly type: string, readonly valueType?: ContentPropertyValueType | null, readonly value?: { readonly __typename?: 'BoolValue', readonly boolValue?: boolean | null } | { readonly __typename?: 'Category', readonly name: string, readonly images?: ReadonlyArray<{ readonly __typename?: 'CategoryImage', readonly url?: any | null } | null> | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | { readonly __typename?: 'ImageValue', readonly value?: string | null, readonly focalPointX?: number | null, readonly focalPointY?: number | null } | { readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly shortDescription: string, readonly description: string, readonly mainHeader: string, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string, readonly breadcrumbs?: ReadonlyArray<string | null> | null } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly modifiedDate?: string | null, readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | { readonly __typename?: 'StringValue', readonly value?: string | null } | null } | null> | null } | null> | null } | null } | null, readonly parents?: ReadonlyArray<{ readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string } | null> | null, readonly alternateRoutes?: ReadonlyArray<{ readonly __typename?: 'AlternateRoute', readonly channelId?: number | null, readonly culture?: string | null, readonly route?: string | null, readonly alias?: string | null } | null> | null } | null };

export type SearchQueryVariables = Exact<{
  term: Scalars['String'];
  first?: InputMaybe<Scalars['Paging']>;
  offset?: InputMaybe<Scalars['Int']>;
  filters?: InputMaybe<FilterInput>;
}>;


export type SearchQuery = { readonly __typename?: 'Query', readonly search?: { readonly __typename?: 'SearchResult', readonly products?: { readonly __typename?: 'ProductSearchResult', readonly totalResults?: number | null, readonly filters?: ReadonlyArray<{ readonly __typename?: 'BooleanFilter', readonly default?: boolean | null, readonly id: string, readonly name: string } | { readonly __typename?: 'ListFilter', readonly id: string, readonly name: string, readonly items: ReadonlyArray<{ readonly __typename?: 'ListFilterItem', readonly id: string, readonly text: string, readonly value: string, readonly resultCount?: number | null } | null> } | { readonly __typename?: 'MultiListFilter', readonly id: string, readonly name: string, readonly lists: ReadonlyArray<{ readonly __typename?: 'MultiListFilterList', readonly id: string, readonly name: string, readonly items: ReadonlyArray<{ readonly __typename?: 'ListFilterItem', readonly id: string, readonly value: string, readonly text: string, readonly resultCount?: number | null } | null> } | null> } | { readonly __typename?: 'NumericRangeFilter', readonly id: string, readonly min: any, readonly max: any, readonly name: string } | null> | null, readonly result: ReadonlyArray<{ readonly __typename?: 'Product', readonly id: number, readonly articleNumber: string, readonly name: string, readonly subName: string, readonly isPackage?: boolean | null, readonly primaryRoute?: { readonly __typename?: 'Route', readonly id: string, readonly path: string, readonly slug: string } | null, readonly images?: ReadonlyArray<{ readonly __typename?: 'ProductImage', readonly alt?: string | null, readonly title?: string | null, readonly url?: any | null, readonly modifiedDate?: string | null } | null> | null, readonly badges?: ReadonlyArray<{ readonly __typename?: 'ProductBadge', readonly name?: string | null, readonly url?: any | null, readonly location?: ProductBadgeLocation | null, readonly style?: string | null, readonly text?: string | null } | null> | null, readonly canonicalCategory?: { readonly __typename?: 'Category', readonly primaryRoute?: { readonly __typename?: 'Route', readonly path: string } | null } | null, readonly customFields?: ReadonlyArray<{ readonly __typename?: 'CustomBoolField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomHtmlField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomMultiLevelListField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null } | { readonly __typename?: 'CustomStringField', readonly key?: string | null, readonly type?: ProductCustomFieldType | null, readonly title?: string | null, readonly stringValue: string } | null> | null, readonly price?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null, readonly previousPrice?: { readonly __typename?: 'Price', readonly incVat: any, readonly exVat: any, readonly vat: any } | null } | null> } | null } | null };

export const PriceFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Price"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Price"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"incVat"}},{"kind":"Field","name":{"kind":"Name","value":"exVat"}},{"kind":"Field","name":{"kind":"Name","value":"vat"}}]}}]} as unknown as DocumentNode<PriceFragment, unknown>;
export const ProductPriceFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductPrice"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousPrice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Price"}}]}}]}},...PriceFragmentDoc.definitions]} as unknown as DocumentNode<ProductPriceFragment, unknown>;
export const BadgeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Badge"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductBadge"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]} as unknown as DocumentNode<BadgeFragment, unknown>;
export const StartPageProductGridFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StartPageProductGrid"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"subName"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"mainHeader"}},{"kind":"Field","name":{"kind":"Name","value":"primaryRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"breadcrumbs"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductPrice"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"modifiedDate"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"badges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Badge"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomStringField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"stringValue"},"name":{"kind":"Name","value":"value"}}]}}]}}]}},...ProductPriceFragmentDoc.definitions,...BadgeFragmentDoc.definitions]} as unknown as DocumentNode<StartPageProductGridFragment, unknown>;
export const StartPageCategoryGridFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StartPageCategoryGrid"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]} as unknown as DocumentNode<StartPageCategoryGridFragment, unknown>;
export const ContentItemFragmentFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"properties"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getImageAsImageValue"},"value":{"kind":"BooleanValue","value":true}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"valueType"}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"focalPointX"}},{"kind":"Field","name":{"kind":"Name","value":"focalPointY"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StartPageProductGrid"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StartPageCategoryGrid"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StringValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BoolValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"boolValue"},"name":{"kind":"Name","value":"value"}}]}}]}}]}}]}},...StartPageProductGridFragmentDoc.definitions,...StartPageCategoryGridFragmentDoc.definitions]} as unknown as DocumentNode<ContentItemFragmentFragment, unknown>;
export const ContentFragmentFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Content"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentItemFragment"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentItemFragment"}}]}}]}}]}},...ContentItemFragmentFragmentDoc.definitions]} as unknown as DocumentNode<ContentFragmentFragment, unknown>;
export const ProductGridFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductGrid"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"subName"}},{"kind":"Field","name":{"kind":"Name","value":"primaryRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isPackage"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductPrice"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"badges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Badge"}}]}},{"kind":"Field","name":{"kind":"Name","value":"canonicalCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primaryRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"customFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomStringField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"stringValue"},"name":{"kind":"Name","value":"value"}}]}}]}}]}},...ProductPriceFragmentDoc.definitions,...BadgeFragmentDoc.definitions]} as unknown as DocumentNode<ProductGridFragment, unknown>;
export const CategoryPageFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CategoryPage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mainHeader"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"breadcrumbText"}},{"kind":"Field","name":{"kind":"Name","value":"isDynamic"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderByDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderByDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sortOrders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"defaultDirection"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ListFilter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"resultCount"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NumericRangeFilter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BooleanFilter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MultiListFilter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"resultCount"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalResults"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductGrid"}}]}}]}}]}},...ContentFragmentFragmentDoc.definitions,...ProductGridFragmentDoc.definitions]} as unknown as DocumentNode<CategoryPageFragment, unknown>;
export const SubPageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubPage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"primaryRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]} as unknown as DocumentNode<SubPageFragment, unknown>;
export const ContentPageFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentPage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primaryRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mainHeader"}},{"kind":"Field","alias":{"kind":"Name","value":"pageId"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentItemFragment"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentItemFragment"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"primaryRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subPages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"includeHidden"},"value":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"subPages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"includeHidden"},"value":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubPage"}}]}}]}},...ContentItemFragmentFragmentDoc.definitions,...SubPageFragmentDoc.definitions]} as unknown as DocumentNode<ContentPageFragment, unknown>;
export const StockStatusFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StockStatus"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StockStatus"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buyable"}},{"kind":"Field","name":{"kind":"Name","value":"maxOrderQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"stockDate"}},{"kind":"Field","name":{"kind":"Name","value":"stockNotificationEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]} as unknown as DocumentNode<StockStatusFragment, unknown>;
export const WarehouseStockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WarehouseStock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Warehouse"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stockLevel"}}]}}]} as unknown as DocumentNode<WarehouseStockFragment, unknown>;
export const CommentsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerComments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"required"}}]}}]}}]} as unknown as DocumentNode<CommentsFragmentFragment, unknown>;
export const ProductVariantPriceFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductVariantPrice"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousPrice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Price"}}]}}]}},...PriceFragmentDoc.definitions]} as unknown as DocumentNode<ProductVariantPriceFragment, unknown>;
export const InPackagesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InPackages"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inPackages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"primaryRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]} as unknown as DocumentNode<InPackagesFragment, unknown>;
export const ProductConfigurationsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductConfigurations"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasConfigurations"}},{"kind":"Field","name":{"kind":"Name","value":"configurations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exVat"}},{"kind":"Field","name":{"kind":"Name","value":"incVat"}},{"kind":"Field","name":{"kind":"Name","value":"vat"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priceCalculation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"formula"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"variables"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProductConfigurationsFragment, unknown>;
export const ProductCampaignFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductCampaign"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"campaigns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"primaryRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]} as unknown as DocumentNode<ProductCampaignFragment, unknown>;
export const PackageProductFragmentFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PackageProductFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isPackage"}},{"kind":"Field","name":{"kind":"Name","value":"package"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discountValue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"hasVariants"}},{"kind":"Field","name":{"kind":"Name","value":"hasConfigurations"}},{"kind":"Field","name":{"kind":"Name","value":"stockStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StockStatus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subName"}},{"kind":"Field","name":{"kind":"Name","value":"primaryRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"modifiedDate"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"values"}}]}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"values"}},{"kind":"Field","name":{"kind":"Name","value":"stockStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StockStatus"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductVariantPrice"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"minQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"discount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PackageDiscountPercentage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"percentage"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PackageDiscountValue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"valueExVat"}},{"kind":"Field","name":{"kind":"Name","value":"valueIncVat"}},{"kind":"Field","name":{"kind":"Name","value":"valueVat"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousPrice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Price"}}]}}]}}]}}]}},...PriceFragmentDoc.definitions,...StockStatusFragmentDoc.definitions,...ProductVariantPriceFragmentDoc.definitions]} as unknown as DocumentNode<PackageProductFragmentFragment, unknown>;
export const ProductPageFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductPage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"subName"}},{"kind":"Field","name":{"kind":"Name","value":"breadcrumbText"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"hasVariants"}},{"kind":"Field","name":{"kind":"Name","value":"isPackage"}},{"kind":"Field","name":{"kind":"Name","value":"canonicalCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primaryRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primaryRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"breadcrumbs"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductPrice"}},{"kind":"Field","name":{"kind":"Name","value":"stockStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StockStatus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"warehouseStock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WarehouseStock"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentsFragment"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"values"}}]}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"warehouseStock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WarehouseStock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"values"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedDate"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductVariantPrice"}},{"kind":"Field","name":{"kind":"Name","value":"stockStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StockStatus"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relatedProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductGrid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomBoolField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"boolValue"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomStringField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"stringValue"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomHtmlField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"htmlValue"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomListField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"listValues"},"name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomMultiLevelListField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"badges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Badge"}}]}},{"kind":"Field","name":{"kind":"Name","value":"preOrder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fromDate"}},{"kind":"Field","name":{"kind":"Name","value":"toDate"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"InPackages"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductConfigurations"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductCampaign"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PackageProductFragment"}}]}},...ProductPriceFragmentDoc.definitions,...StockStatusFragmentDoc.definitions,...WarehouseStockFragmentDoc.definitions,...CommentsFragmentFragmentDoc.definitions,...ProductVariantPriceFragmentDoc.definitions,...ProductGridFragmentDoc.definitions,...BadgeFragmentDoc.definitions,...InPackagesFragmentDoc.definitions,...ProductConfigurationsFragmentDoc.definitions,...ProductCampaignFragmentDoc.definitions,...PackageProductFragmentFragmentDoc.definitions]} as unknown as DocumentNode<ProductPageFragment, unknown>;
export const StartPageFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StartPage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StartPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"head"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"metaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"canonicalPath"}},{"kind":"Field","name":{"kind":"Name","value":"alternateRoutes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channelId"}},{"kind":"Field","name":{"kind":"Name","value":"culture"}},{"kind":"Field","name":{"kind":"Name","value":"route"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"breadcrumbText"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentItemFragment"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentItemFragment"}}]}}]}}]}}]}},...ContentItemFragmentFragmentDoc.definitions]} as unknown as DocumentNode<StartPageFragment, unknown>;
export const CartCoreFragmentFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CartCoreFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cart"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalCheckoutUrl"}},{"kind":"Field","name":{"kind":"Name","value":"totalQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"productTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productPreviousTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discountTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"aggregatedDiscounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"campaign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"subHeading"}},{"kind":"Field","name":{"kind":"Name","value":"variant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"values"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductVariantPrice"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"modifiedDate"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"configurations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"option"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"discounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Price"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"discount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousTotal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductPrice"}},{"kind":"Field","name":{"kind":"Name","value":"primaryRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"modifiedDate"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"canonicalCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primaryRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]}}]}},...PriceFragmentDoc.definitions,...ProductVariantPriceFragmentDoc.definitions,...ProductPriceFragmentDoc.definitions]} as unknown as DocumentNode<CartCoreFragmentFragment, unknown>;
export const CurrencyFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CurrencyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Currency"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"format"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}}]}}]}}]} as unknown as DocumentNode<CurrencyFragmentFragment, unknown>;
export const ChannelsFragmentFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChannelsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Channel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"requiresAuth"}},{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}}]}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"culture"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CurrencyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"defaultCurrency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CurrencyFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"defaultLanguage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"culture"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}}]}},{"kind":"Field","name":{"kind":"Name","value":"settings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nostoAccountId"}},{"kind":"Field","name":{"kind":"Name","value":"tracking"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ga"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trackingId"}},{"kind":"Field","name":{"kind":"Name","value":"useArticleNumberAsId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gtm"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"containerId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fca"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"pixelId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pricesIncVat"}}]}}]}},...CurrencyFragmentFragmentDoc.definitions]} as unknown as DocumentNode<ChannelsFragmentFragment, unknown>;
export const HeadFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Head"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"head"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"metaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}}]} as unknown as DocumentNode<HeadFragment, unknown>;
export const MinimalProductListDetailFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MinimalProductListDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerProductList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}}]}}]}}]}}]} as unknown as DocumentNode<MinimalProductListDetailFragment, unknown>;
export const VariantDetailFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VariantDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"values"}},{"kind":"Field","name":{"kind":"Name","value":"stockStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buyable"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"modifiedDate"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<VariantDetailFragment, unknown>;
export const VariantsDetailFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VariantsDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariants"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"values"}}]}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VariantDetail"}}]}}]}},...VariantDetailFragmentDoc.definitions]} as unknown as DocumentNode<VariantsDetailFragment, unknown>;
export const ProductDetailFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"subName"}},{"kind":"Field","name":{"kind":"Name","value":"hasConfigurations"}},{"kind":"Field","name":{"kind":"Name","value":"hasVariants"}},{"kind":"Field","name":{"kind":"Name","value":"isPreOrder"}},{"kind":"Field","name":{"kind":"Name","value":"isPackage"}},{"kind":"Field","name":{"kind":"Name","value":"stockStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buyable"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductPrice"}},{"kind":"Field","name":{"kind":"Name","value":"badges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Badge"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"modifiedDate"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VariantsDetail"}}]}}]}},...ProductPriceFragmentDoc.definitions,...BadgeFragmentDoc.definitions,...VariantsDetailFragmentDoc.definitions]} as unknown as DocumentNode<ProductDetailFragment, unknown>;
export const ProductListFragmentFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductListFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerProductList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shareToken"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductDetail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"VariantDetail"}}]}}]}}]}},...ProductDetailFragmentDoc.definitions,...VariantDetailFragmentDoc.definitions]} as unknown as DocumentNode<ProductListFragmentFragment, unknown>;
export const ProductMetadataFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductMetadata"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductPrice"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"modifiedDate"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"canonicalCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},...ProductPriceFragmentDoc.definitions]} as unknown as DocumentNode<ProductMetadataFragment, unknown>;
export const RouteCrumbFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RouteCrumb"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Route"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"parents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"breadcrumbText"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"canonicalPath"}},{"kind":"Field","name":{"kind":"Name","value":"alternateRoutes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channelId"}},{"kind":"Field","name":{"kind":"Name","value":"culture"}},{"kind":"Field","name":{"kind":"Name","value":"route"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]} as unknown as DocumentNode<RouteCrumbFragment, unknown>;
export const RouteMetaFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RouteMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Route"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"parents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"canonicalPath"}},{"kind":"Field","name":{"kind":"Name","value":"alternateRoutes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channelId"}},{"kind":"Field","name":{"kind":"Name","value":"culture"}},{"kind":"Field","name":{"kind":"Name","value":"route"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"breadcrumbs"}}]}}]} as unknown as DocumentNode<RouteMetaFragment, unknown>;
export const CategoryDetailFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CategoryDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"hasSubcategories"}},{"kind":"Field","name":{"kind":"Name","value":"primaryRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]} as unknown as DocumentNode<CategoryDetailFragment, unknown>;
export const CategoriesWithSubcategoriesFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"categoriesWithSubcategories"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryDetail"}},{"kind":"Field","name":{"kind":"Name","value":"subcategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryDetail"}}]}}]}},...CategoryDetailFragmentDoc.definitions]} as unknown as DocumentNode<CategoriesWithSubcategoriesFragment, unknown>;
export const AddMultipleToCartDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addMultipleToCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"items"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddMultipleToCartInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addMultipleToCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cartId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}}},{"kind":"Argument","name":{"kind":"Name","value":"items"},"value":{"kind":"Variable","name":{"kind":"Name","value":"items"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartCoreFragment"}}]}}]}}]}},...CartCoreFragmentFragmentDoc.definitions]} as unknown as DocumentNode<AddMultipleToCartMutation, AddMultipleToCartMutationVariables>;
export const AddToCartDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addToCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddToCartInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addToCart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartCoreFragment"}}]}}]}}]}},...CartCoreFragmentFragmentDoc.definitions]} as unknown as DocumentNode<AddToCartMutation, AddToCartMutationVariables>;
export const SubscribeToNewsletterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubscribeToNewsletter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscribeToNewsletter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<SubscribeToNewsletterMutation, SubscribeToNewsletterMutationVariables>;
export const AutocompleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Autocomplete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"term"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchAutoComplete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"term"},"value":{"kind":"Variable","name":{"kind":"Name","value":"term"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"primaryRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"breadcrumbs"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"primaryRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AutocompleteQuery, AutocompleteQueryVariables>;
export const CartDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Cart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cartId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CartCoreFragment"}}]}}]}},...CartCoreFragmentFragmentDoc.definitions]} as unknown as DocumentNode<CartQuery, CartQueryVariables>;
export const NavTreeDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NavTree"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"root"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"levels"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeHidden"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"root"},"value":{"kind":"Variable","name":{"kind":"Name","value":"root"}}},{"kind":"Argument","name":{"kind":"Name","value":"levels"},"value":{"kind":"Variable","name":{"kind":"Name","value":"levels"}}},{"kind":"Argument","name":{"kind":"Name","value":"includeHidden"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeHidden"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"categoriesWithSubcategories"}}]}}]}},...CategoriesWithSubcategoriesFragmentDoc.definitions]} as unknown as DocumentNode<NavTreeQuery, NavTreeQueryVariables>;
export const PagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"primaryRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subPages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"primaryRoute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PagesQuery, PagesQueryVariables>;
export const ProductVariantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductVariants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"articleNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleNumber"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"values"}}]}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleNumber"}},{"kind":"Field","name":{"kind":"Name","value":"values"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProductVariantsQuery, ProductVariantsQueryVariables>;
export const RouteDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Route"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Paging"}},"defaultValue":{"kind":"IntValue","value":"16"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"0"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductOrderOptions"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderByDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SortDirection"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"route"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RouteMeta"}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Head"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryPage"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductPage"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentPage"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StartPage"}}]}}]}}]}},...RouteMetaFragmentDoc.definitions,...HeadFragmentDoc.definitions,...CategoryPageFragmentDoc.definitions,...ProductPageFragmentDoc.definitions,...ContentPageFragmentDoc.definitions,...StartPageFragmentDoc.definitions]} as unknown as DocumentNode<RouteQuery, RouteQueryVariables>;
export const SearchDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Search"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"term"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Paging"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"term"},"value":{"kind":"Variable","name":{"kind":"Name","value":"term"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"paging"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ListFilter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"resultCount"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NumericRangeFilter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BooleanFilter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MultiListFilter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"resultCount"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalResults"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductGrid"}}]}}]}}]}}]}},...ProductGridFragmentDoc.definitions]} as unknown as DocumentNode<SearchQuery, SearchQueryVariables>;