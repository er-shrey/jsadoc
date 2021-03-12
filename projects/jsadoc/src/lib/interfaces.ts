export interface jsadocMessage {
    status_code: number;
    description: string;
    message?: any;
}

export interface jsadocResponse {
    content_type: number;
    available_content_type: string[];
    messages: jsadocMessage[];
}

export interface jsadocParameter {
    key: string;
    is_required: boolean;
    type: 'string' | 'date' | 'file' | 'number' | 'boolean' | 'password';
    description: string;
}

export interface jsadocApi {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    url: string;
    description: string;
    other_details: string;
    can_try: boolean;
    parameters: jsadocParameter[];
    response: jsadocResponse;
}

export interface jsadocGroupDetail {
    name: string;
    description: string;
    other_details: string;
}

export interface jsadocGroup {
    group_detail: jsadocGroupDetail;
    api_list: jsadocApi[];
}

export interface jsadocHeader {
    title: string;
    version: string;
    base_url: string;
    description: string;
    lisence: string;
    contact_email: string;
    termsConditions: string;
    learn_more_url: string;
}

export interface jsadocJson {
    header: jsadocHeader;
    group: jsadocGroup[];
}