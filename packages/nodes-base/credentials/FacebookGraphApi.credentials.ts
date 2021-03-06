import {
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';


export class FacebookGraphApi implements ICredentialType {
	name = 'facebookGraphApi';
	displayName = 'Facebook Graph API';
	documentationUrl = 'facebookGraph';
	properties = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
	];
}
