import type { Struct, Schema } from "@strapi/strapi";

export interface UiValue extends Struct.ComponentSchema {
  collectionName: "components_ui_values";
  info: {
    displayName: "Value";
    icon: "code";
    description: "";
  };
  attributes: {
    color: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration;
    title: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
  };
}

export interface UiTab extends Struct.ComponentSchema {
  collectionName: "components_ui_tabs";
  info: {
    displayName: "Tab";
    description: "";
  };
  attributes: {
    tabTitle: Schema.Attribute.String & Schema.Attribute.DefaultTo;
    icon: Schema.Attribute.Enumeration;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo;
    subtitle: Schema.Attribute.String & Schema.Attribute.DefaultTo;
    paragraph: Schema.Attribute.Blocks;
  };
}

export interface UiReview extends Struct.ComponentSchema {
  collectionName: "components_ui_reviews";
  info: {
    displayName: "Review";
    icon: "quote";
  };
  attributes: {
    publicationDate: Schema.Attribute.Date;
    name: Schema.Attribute.String & Schema.Attribute.DefaultTo;
    review: Schema.Attribute.Text;
    rating: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo;
  };
}

export interface UiNumber extends Struct.ComponentSchema {
  collectionName: "components_ui_numbers";
  info: {
    displayName: "Number";
    icon: "chartCircle";
  };
  attributes: {
    number: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String;
  };
}

export interface UiFeature extends Struct.ComponentSchema {
  collectionName: "components_sections_feature";
  info: {
    displayName: "Feature";
    icon: "brush";
    description: "";
  };
  attributes: {
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration;
    title: Schema.Attribute.String;
  };
}

export interface UiCell extends Struct.ComponentSchema {
  collectionName: "components_ui_cells";
  info: {
    displayName: "Cell";
    icon: "apps";
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface UiCard extends Struct.ComponentSchema {
  collectionName: "components_ui_cards";
  info: {
    displayName: "Card";
    icon: "puzzle";
    description: "";
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    link: Schema.Attribute.String;
    read_more_url: Schema.Attribute.String;
    read_more_label: Schema.Attribute.String;
    background_image: Schema.Attribute.Media;
    foreground_image: Schema.Attribute.Media;
  };
}

export interface SectionsValues extends Struct.ComponentSchema {
  collectionName: "components_sections_values";
  info: {
    displayName: "Values";
    icon: "dashboard";
    description: "";
  };
  attributes: {
    title: Schema.Attribute.String;
    values: Schema.Attribute.Component;
  };
}

export interface SectionsTabs extends Struct.ComponentSchema {
  collectionName: "components_sections_tabs";
  info: {
    displayName: "Tabs";
  };
  attributes: {
    tabs: Schema.Attribute.Component;
  };
}

export interface SectionsSkewedJumbo extends Struct.ComponentSchema {
  collectionName: "components_sections_skewed_jumbos";
  info: {
    displayName: "Skewed Jumbo";
    icon: "crop";
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface SectionsReviews extends Struct.ComponentSchema {
  collectionName: "components_sections_reviews";
  info: {
    displayName: "Reviews";
    icon: "message";
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo;
    reviews: Schema.Attribute.Component;
  };
}

export interface SectionsPhotoBento extends Struct.ComponentSchema {
  collectionName: "components_sections_photo_bentos";
  info: {
    displayName: "PhotoBento";
    icon: "picture";
  };
  attributes: {
    pictures: Schema.Attribute.Media;
  };
}

export interface SectionsPartners extends Struct.ComponentSchema {
  collectionName: "components_sections_partners";
  info: {
    displayName: "Partners";
    icon: "apps";
    description: "";
  };
  attributes: {
    title: Schema.Attribute.String;
    partners: Schema.Attribute.Media;
  };
}

export interface SectionsNumbers extends Struct.ComponentSchema {
  collectionName: "components_sections_numbers";
  info: {
    displayName: "Numbers";
    icon: "chartCircle";
  };
  attributes: {
    numbers: Schema.Attribute.Component;
  };
}

export interface SectionsNews extends Struct.ComponentSchema {
  collectionName: "components_sections_news";
  info: {
    displayName: "News";
    icon: "envelop";
  };
  attributes: {
    title: Schema.Attribute.String;
    articles: Schema.Attribute.Component;
  };
}

export interface SectionsJumbo extends Struct.ComponentSchema {
  collectionName: "components_sections_jumbos";
  info: {
    displayName: "Jumbo";
    icon: "chartBubble";
    description: "";
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo;
    title_emphasis: Schema.Attribute.String & Schema.Attribute.DefaultTo;
    image: Schema.Attribute.Media;
  };
}

export interface SectionsHorizontalTabs extends Struct.ComponentSchema {
  collectionName: "components_sections_horizontal_tabs";
  info: {
    displayName: "Horizontal Tabs";
    icon: "apps";
  };
  attributes: {
    tabs: Schema.Attribute.Component;
  };
}

export interface SectionsHiring extends Struct.ComponentSchema {
  collectionName: "components_sections_hirings";
  info: {
    displayName: "Hiring";
    icon: "user";
  };
  attributes: {
    image: Schema.Attribute.Media;
    subtitle: Schema.Attribute.String & Schema.Attribute.DefaultTo;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo;
    call_to_action_text: Schema.Attribute.String & Schema.Attribute.DefaultTo;
    call_to_action_link: Schema.Attribute.String & Schema.Attribute.DefaultTo;
  };
}

export interface SectionsGrid extends Struct.ComponentSchema {
  collectionName: "components_sections_grids";
  info: {
    displayName: "Grid";
    icon: "apps";
  };
  attributes: {
    columns: Schema.Attribute.Component;
  };
}

export interface SectionsFeatures extends Struct.ComponentSchema {
  collectionName: "components_sections_features";
  info: {
    displayName: "Features";
    description: "";
  };
  attributes: {
    title: Schema.Attribute.Blocks & Schema.Attribute.Required;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    features: Schema.Attribute.Component;
  };
}

export interface SectionsDetailCta extends Struct.ComponentSchema {
  collectionName: "components_sections_detail_ctas";
  info: {
    displayName: "DetailCta";
    icon: "cursor";
    description: "";
  };
  attributes: {
    title: Schema.Attribute.String;
    title_emphasis: Schema.Attribute.String;
    paragraph: Schema.Attribute.Blocks;
    call_to_action_text: Schema.Attribute.String;
    call_to_action_link: Schema.Attribute.String;
  };
}

export interface SectionsDetailCtaImage extends Struct.ComponentSchema {
  collectionName: "components_sections_detail_cta_images";
  info: {
    displayName: "DetailCtaImage";
    icon: "cursor";
    description: "";
  };
  attributes: {
    title: Schema.Attribute.String;
    paragraph: Schema.Attribute.Blocks;
    call_to_action_text: Schema.Attribute.String;
    call_to_action_link: Schema.Attribute.String;
    image: Schema.Attribute.Media;
    imageOnTheRight: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo;
  };
}

export interface SectionsContact extends Struct.ComponentSchema {
  collectionName: "components_sections_contacts";
  info: {
    displayName: "Contact";
    icon: "envelop";
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo;
  };
}

export interface SectionsClients extends Struct.ComponentSchema {
  collectionName: "components_sections_clients";
  info: {
    displayName: "Clients";
    icon: "user";
    description: "";
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo;
    read_more_title: Schema.Attribute.String & Schema.Attribute.DefaultTo;
    clients: Schema.Attribute.Component;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "ui.value": UiValue;
      "ui.tab": UiTab;
      "ui.review": UiReview;
      "ui.number": UiNumber;
      "ui.feature": UiFeature;
      "ui.cell": UiCell;
      "ui.card": UiCard;
      "sections.values": SectionsValues;
      "sections.tabs": SectionsTabs;
      "sections.skewed-jumbo": SectionsSkewedJumbo;
      "sections.reviews": SectionsReviews;
      "sections.photo-bento": SectionsPhotoBento;
      "sections.partners": SectionsPartners;
      "sections.numbers": SectionsNumbers;
      "sections.news": SectionsNews;
      "sections.jumbo": SectionsJumbo;
      "sections.horizontal-tabs": SectionsHorizontalTabs;
      "sections.hiring": SectionsHiring;
      "sections.grid": SectionsGrid;
      "sections.features": SectionsFeatures;
      "sections.detail-cta": SectionsDetailCta;
      "sections.detail-cta-image": SectionsDetailCtaImage;
      "sections.contact": SectionsContact;
      "sections.clients": SectionsClients;
    }
  }
}
