/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.22.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* TokenRequestStatus is the result of a token request.
*/
export class V1TokenRequestStatus {
    /**
    * ExpirationTimestamp is the time of expiration of the returned token.
    */
    'expirationTimestamp': Date;
    /**
    * Token is the opaque bearer token.
    */
    'token': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "expirationTimestamp",
            "baseName": "expirationTimestamp",
            "type": "Date"
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1TokenRequestStatus.attributeTypeMap;
    }
}

