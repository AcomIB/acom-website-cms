import type { Schema, Attribute } from '@strapi/strapi';

export interface UiValue extends Schema.Component {
  collectionName: 'components_ui_values';
  info: {
    displayName: 'Value';
    icon: 'code';
    description: '';
  };
  attributes: {
    color: Attribute.String;
    icon: Attribute.Enumeration<['A', 'C', 'O', 'M']>;
    title: Attribute.String;
    description: Attribute.Blocks;
  };
}

export interface UiTab extends Schema.Component {
  collectionName: 'components_ui_tabs';
  info: {
    displayName: 'Tab';
    description: '';
  };
  attributes: {
    tabTitle: Attribute.String & Attribute.DefaultTo<'voordelig'>;
    icon: Attribute.Enumeration<
      [
        'handshake',
        'headset',
        'house',
        'lock',
        'server',
        'telephone',
        'euro',
        'shuffle'
      ]
    >;
    title: Attribute.String &
      Attribute.DefaultTo<'Kies voor Microsoft Azure en vermijd grote investeringen.'>;
    subtitle: Attribute.String & Attribute.DefaultTo<'subtitle'>;
    paragraph: Attribute.Blocks;
  };
}

export interface UiReview extends Schema.Component {
  collectionName: 'components_ui_reviews';
  info: {
    displayName: 'Review';
    icon: 'quote';
  };
  attributes: {
    publicationDate: Attribute.Date;
    name: Attribute.String & Attribute.DefaultTo<'John Doe'>;
    review: Attribute.Text;
    rating: Attribute.Decimal & Attribute.DefaultTo<5>;
  };
}

export interface UiNumber extends Schema.Component {
  collectionName: 'components_ui_numbers';
  info: {
    displayName: 'Number';
    icon: 'chartCircle';
  };
  attributes: {
    number: Attribute.String & Attribute.Required;
    label: Attribute.String;
  };
}

export interface UiFeature extends Schema.Component {
  collectionName: 'components_sections_feature';
  info: {
    displayName: 'Feature';
    icon: 'brush';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    href: Attribute.String;
    icon: Attribute.Enumeration<
      ['handshake', 'headset', 'house', 'lock', 'server', 'telephone']
    >;
    title: Attribute.String;
  };
}

export interface UiCell extends Schema.Component {
  collectionName: 'components_ui_cells';
  info: {
    displayName: 'Cell';
    icon: 'apps';
  };
  attributes: {
    content: Attribute.Blocks;
  };
}

export interface UiCard extends Schema.Component {
  collectionName: 'components_ui_cards';
  info: {
    displayName: 'Card';
    icon: 'puzzle';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    link: Attribute.String;
    read_more_url: Attribute.String;
    read_more_label: Attribute.String;
    background_image: Attribute.Media<'images' | 'files'>;
    foreground_image: Attribute.Media<'images' | 'files'>;
  };
}

export interface SectionsValues extends Schema.Component {
  collectionName: 'components_sections_values';
  info: {
    displayName: 'Values';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    values: Attribute.Component<'ui.value', true>;
  };
}

export interface SectionsTabs extends Schema.Component {
  collectionName: 'components_sections_tabs';
  info: {
    displayName: 'Tabs';
  };
  attributes: {
    tabs: Attribute.Component<'ui.tab', true>;
  };
}

export interface SectionsSkewedJumbo extends Schema.Component {
  collectionName: 'components_sections_skewed_jumbos';
  info: {
    displayName: 'Skewed Jumbo';
    icon: 'crop';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.Blocks & Attribute.Required;
  };
}

export interface SectionsReviews extends Schema.Component {
  collectionName: 'components_sections_reviews';
  info: {
    displayName: 'Reviews';
    icon: 'message';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'acom reviews.'>;
    reviews: Attribute.Component<'ui.review', true>;
  };
}

export interface SectionsPhotoBento extends Schema.Component {
  collectionName: 'components_sections_photo_bentos';
  info: {
    displayName: 'PhotoBento';
    icon: 'picture';
  };
  attributes: {
    pictures: Attribute.Media<'images' | 'files', true>;
  };
}

export interface SectionsPartners extends Schema.Component {
  collectionName: 'components_sections_partners';
  info: {
    displayName: 'Partners';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    partners: Attribute.Media<'files' | 'images', true>;
  };
}

export interface SectionsNumbers extends Schema.Component {
  collectionName: 'components_sections_numbers';
  info: {
    displayName: 'Numbers';
    icon: 'chartCircle';
  };
  attributes: {
    numbers: Attribute.Component<'ui.number', true>;
  };
}

export interface SectionsNews extends Schema.Component {
  collectionName: 'components_sections_news';
  info: {
    displayName: 'News';
    icon: 'envelop';
  };
  attributes: {
    title: Attribute.String;
    articles: Attribute.Component<'ui.card', true>;
  };
}

export interface SectionsJumbo extends Schema.Component {
  collectionName: 'components_sections_jumbos';
  info: {
    displayName: 'Jumbo';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'Uw IT in '>;
    title_emphasis: Attribute.String & Attribute.DefaultTo<'vertrouwde handen'>;
    image: Attribute.Media<'images' | 'files'>;
  };
}

export interface SectionsHorizontalTabs extends Schema.Component {
  collectionName: 'components_sections_horizontal_tabs';
  info: {
    displayName: 'Horizontal Tabs';
    icon: 'apps';
  };
  attributes: {
    tabs: Attribute.Component<'ui.tab', true>;
  };
}

export interface SectionsHiring extends Schema.Component {
  collectionName: 'components_sections_hirings';
  info: {
    displayName: 'Hiring';
    icon: 'user';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files'>;
    subtitle: Attribute.String &
      Attribute.DefaultTo<'Op zoek naar een leuke, uitdagende job?'>;
    title: Attribute.String &
      Attribute.DefaultTo<"Wij zijn op zoek naar toffe collega's!">;
    call_to_action_text: Attribute.String &
      Attribute.DefaultTo<'Soliciteer nu!'>;
    call_to_action_link: Attribute.String & Attribute.DefaultTo<'#apply-now'>;
  };
}

export interface SectionsGrid extends Schema.Component {
  collectionName: 'components_sections_grids';
  info: {
    displayName: 'Grid';
    icon: 'apps';
  };
  attributes: {
    columns: Attribute.Component<'ui.cell', true>;
  };
}

export interface SectionsFeatures extends Schema.Component {
  collectionName: 'components_sections_features';
  info: {
    displayName: 'Features';
    description: '';
  };
  attributes: {
    title: Attribute.Blocks & Attribute.Required;
    description: Attribute.Blocks & Attribute.Required;
    features: Attribute.Component<'ui.feature', true>;
  };
}

export interface SectionsDetailCta extends Schema.Component {
  collectionName: 'components_sections_detail_ctas';
  info: {
    displayName: 'DetailCta';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    title_emphasis: Attribute.String;
    paragraph: Attribute.Blocks;
    call_to_action_text: Attribute.String;
    call_to_action_link: Attribute.String;
  };
}

export interface SectionsDetailCtaImage extends Schema.Component {
  collectionName: 'components_sections_detail_cta_images';
  info: {
    displayName: 'DetailCtaImage';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    paragraph: Attribute.Blocks;
    call_to_action_text: Attribute.String;
    call_to_action_link: Attribute.String;
    image: Attribute.Media<'images' | 'files'>;
    imageOnTheRight: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface SectionsContact extends Schema.Component {
  collectionName: 'components_sections_contacts';
  info: {
    displayName: 'Contact';
    icon: 'envelop';
  };
  attributes: {
    title: Attribute.String &
      Attribute.DefaultTo<'Op zoek naar IT-ondersteuning?'>;
  };
}

export interface SectionsClients extends Schema.Component {
  collectionName: 'components_sections_clients';
  info: {
    displayName: 'Clients';
    icon: 'user';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'Onze cli\u00EBnten'>;
    read_more_title: Attribute.String & Attribute.DefaultTo<'Meer cases'>;
    clients: Attribute.Component<'ui.card', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ui.value': UiValue;
      'ui.tab': UiTab;
      'ui.review': UiReview;
      'ui.number': UiNumber;
      'ui.feature': UiFeature;
      'ui.cell': UiCell;
      'ui.card': UiCard;
      'sections.values': SectionsValues;
      'sections.tabs': SectionsTabs;
      'sections.skewed-jumbo': SectionsSkewedJumbo;
      'sections.reviews': SectionsReviews;
      'sections.photo-bento': SectionsPhotoBento;
      'sections.partners': SectionsPartners;
      'sections.numbers': SectionsNumbers;
      'sections.news': SectionsNews;
      'sections.jumbo': SectionsJumbo;
      'sections.horizontal-tabs': SectionsHorizontalTabs;
      'sections.hiring': SectionsHiring;
      'sections.grid': SectionsGrid;
      'sections.features': SectionsFeatures;
      'sections.detail-cta': SectionsDetailCta;
      'sections.detail-cta-image': SectionsDetailCtaImage;
      'sections.contact': SectionsContact;
      'sections.clients': SectionsClients;
    }
  }
}
