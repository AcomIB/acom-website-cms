import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsClients extends Struct.ComponentSchema {
  collectionName: 'components_sections_clients';
  info: {
    description: '';
    displayName: 'Clients';
    icon: 'user';
  };
  attributes: {
    clients: Schema.Attribute.Component<'ui.card', true>;
    read_more_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Meer cases'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Onze cli\u00EBnten'>;
  };
}

export interface SectionsContact extends Struct.ComponentSchema {
  collectionName: 'components_sections_contacts';
  info: {
    displayName: 'Contact';
    icon: 'envelop';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Op zoek naar IT-ondersteuning?'>;
  };
}

export interface SectionsDetailCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_detail_ctas';
  info: {
    description: '';
    displayName: 'DetailCta';
    icon: 'cursor';
  };
  attributes: {
    call_to_action_link: Schema.Attribute.String;
    call_to_action_text: Schema.Attribute.String;
    paragraph: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    title_emphasis: Schema.Attribute.String;
  };
}

export interface SectionsDetailCtaImage extends Struct.ComponentSchema {
  collectionName: 'components_sections_detail_cta_images';
  info: {
    description: '';
    displayName: 'DetailCtaImage';
    icon: 'cursor';
  };
  attributes: {
    call_to_action_link: Schema.Attribute.String;
    call_to_action_text: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    imageOnTheRight: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    paragraph: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_sections_features';
  info: {
    description: '';
    displayName: 'Features';
  };
  attributes: {
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    features: Schema.Attribute.Component<'ui.feature', true>;
    title: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface SectionsGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_grids';
  info: {
    displayName: 'Grid';
    icon: 'apps';
  };
  attributes: {
    columns: Schema.Attribute.Component<'ui.cell', true>;
  };
}

export interface SectionsHiring extends Struct.ComponentSchema {
  collectionName: 'components_sections_hirings';
  info: {
    displayName: 'Hiring';
    icon: 'user';
  };
  attributes: {
    call_to_action_link: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#apply-now'>;
    call_to_action_text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Soliciteer nu!'>;
    image: Schema.Attribute.Media<'images' | 'files'>;
    subtitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Op zoek naar een leuke, uitdagende job?'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"Wij zijn op zoek naar toffe collega's!">;
  };
}

export interface SectionsHorizontalTabs extends Struct.ComponentSchema {
  collectionName: 'components_sections_horizontal_tabs';
  info: {
    displayName: 'Horizontal Tabs';
    icon: 'apps';
  };
  attributes: {
    tabs: Schema.Attribute.Component<'ui.tab', true>;
  };
}

export interface SectionsJumbo extends Struct.ComponentSchema {
  collectionName: 'components_sections_jumbos';
  info: {
    description: '';
    displayName: 'Jumbo';
    icon: 'chartBubble';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Uw IT in '>;
    title_emphasis: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'vertrouwde handen'>;
  };
}

export interface SectionsNews extends Struct.ComponentSchema {
  collectionName: 'components_sections_news';
  info: {
    displayName: 'News';
    icon: 'envelop';
  };
  attributes: {
    articles: Schema.Attribute.Component<'ui.card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsNumbers extends Struct.ComponentSchema {
  collectionName: 'components_sections_numbers';
  info: {
    displayName: 'Numbers';
    icon: 'chartCircle';
  };
  attributes: {
    numbers: Schema.Attribute.Component<'ui.number', true>;
  };
}

export interface SectionsPartners extends Struct.ComponentSchema {
  collectionName: 'components_sections_partners';
  info: {
    description: '';
    displayName: 'Partners';
    icon: 'apps';
  };
  attributes: {
    partners: Schema.Attribute.Media<'files' | 'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsPhotoBento extends Struct.ComponentSchema {
  collectionName: 'components_sections_photo_bentos';
  info: {
    displayName: 'PhotoBento';
    icon: 'picture';
  };
  attributes: {
    pictures: Schema.Attribute.Media<'images' | 'files', true>;
  };
}

export interface SectionsPricing extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricings';
  info: {
    description: '';
    displayName: 'Pricing';
    icon: 'connector';
  };
  attributes: {
    plans: Schema.Attribute.Component<'ui.plan', true>;
  };
}

export interface SectionsReviews extends Struct.ComponentSchema {
  collectionName: 'components_sections_reviews';
  info: {
    displayName: 'Reviews';
    icon: 'message';
  };
  attributes: {
    reviews: Schema.Attribute.Component<'ui.review', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'acom reviews.'>;
  };
}

export interface SectionsSkewedJumbo extends Struct.ComponentSchema {
  collectionName: 'components_sections_skewed_jumbos';
  info: {
    displayName: 'Skewed Jumbo';
    icon: 'crop';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTabs extends Struct.ComponentSchema {
  collectionName: 'components_sections_tabs';
  info: {
    displayName: 'Tabs';
  };
  attributes: {
    tabs: Schema.Attribute.Component<'ui.tab', true>;
  };
}

export interface SectionsValues extends Struct.ComponentSchema {
  collectionName: 'components_sections_values';
  info: {
    description: '';
    displayName: 'Values';
    icon: 'dashboard';
  };
  attributes: {
    title: Schema.Attribute.String;
    values: Schema.Attribute.Component<'ui.value', true>;
  };
}

export interface UiCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_cards';
  info: {
    description: '';
    displayName: 'Card';
    icon: 'puzzle';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images' | 'files'>;
    description: Schema.Attribute.Blocks;
    foreground_image: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.String;
    read_more_label: Schema.Attribute.String;
    read_more_url: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiCell extends Struct.ComponentSchema {
  collectionName: 'components_ui_cells';
  info: {
    displayName: 'Cell';
    icon: 'apps';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface UiFeature extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature';
  info: {
    description: '';
    displayName: 'Feature';
    icon: 'brush';
  };
  attributes: {
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      ['handshake', 'headset', 'house', 'lock', 'server', 'telephone']
    >;
    title: Schema.Attribute.String;
  };
}

export interface UiNumber extends Struct.ComponentSchema {
  collectionName: 'components_ui_numbers';
  info: {
    displayName: 'Number';
    icon: 'chartCircle';
  };
  attributes: {
    label: Schema.Attribute.String;
    number: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiPlan extends Struct.ComponentSchema {
  collectionName: 'components_ui_plans';
  info: {
    description: '';
    displayName: 'Plan';
  };
  attributes: {
    callToActionLabel: Schema.Attribute.String & Schema.Attribute.Required;
    callToActionLink: Schema.Attribute.String & Schema.Attribute.Required;
    features: Schema.Attribute.Component<'ui.plan-feature', true>;
    isPerYear: Schema.Attribute.Boolean;
    isSuggestedPlan: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    planName: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.Decimal;
    priceAlternative: Schema.Attribute.String;
    tagline: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface UiPlanFeature extends Struct.ComponentSchema {
  collectionName: 'components_ui_plan_features';
  info: {
    description: '';
    displayName: 'PlanFeature';
  };
  attributes: {
    feature: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface UiReview extends Struct.ComponentSchema {
  collectionName: 'components_ui_reviews';
  info: {
    displayName: 'Review';
    icon: 'quote';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.DefaultTo<'John Doe'>;
    publicationDate: Schema.Attribute.Date;
    rating: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<5>;
    review: Schema.Attribute.Text;
  };
}

export interface UiTab extends Struct.ComponentSchema {
  collectionName: 'components_ui_tabs';
  info: {
    description: '';
    displayName: 'Tab';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      [
        'handshake',
        'headset',
        'house',
        'lock',
        'server',
        'telephone',
        'euro',
        'shuffle',
      ]
    >;
    paragraph: Schema.Attribute.Blocks;
    subtitle: Schema.Attribute.String & Schema.Attribute.DefaultTo<'subtitle'>;
    tabTitle: Schema.Attribute.String & Schema.Attribute.DefaultTo<'voordelig'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Kies voor Microsoft Azure en vermijd grote investeringen.'>;
  };
}

export interface UiValue extends Struct.ComponentSchema {
  collectionName: 'components_ui_values';
  info: {
    description: '';
    displayName: 'Value';
    icon: 'code';
  };
  attributes: {
    color: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Enumeration<['A', 'C', 'O', 'M']>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.clients': SectionsClients;
      'sections.contact': SectionsContact;
      'sections.detail-cta': SectionsDetailCta;
      'sections.detail-cta-image': SectionsDetailCtaImage;
      'sections.features': SectionsFeatures;
      'sections.grid': SectionsGrid;
      'sections.hiring': SectionsHiring;
      'sections.horizontal-tabs': SectionsHorizontalTabs;
      'sections.jumbo': SectionsJumbo;
      'sections.news': SectionsNews;
      'sections.numbers': SectionsNumbers;
      'sections.partners': SectionsPartners;
      'sections.photo-bento': SectionsPhotoBento;
      'sections.pricing': SectionsPricing;
      'sections.reviews': SectionsReviews;
      'sections.skewed-jumbo': SectionsSkewedJumbo;
      'sections.tabs': SectionsTabs;
      'sections.values': SectionsValues;
      'ui.card': UiCard;
      'ui.cell': UiCell;
      'ui.feature': UiFeature;
      'ui.number': UiNumber;
      'ui.plan': UiPlan;
      'ui.plan-feature': UiPlanFeature;
      'ui.review': UiReview;
      'ui.tab': UiTab;
      'ui.value': UiValue;
    }
  }
}
