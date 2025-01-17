// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
import { IConfigurationElement, IElementValue } from "./types";

export const configurationElements: IConfigurationElement[] = [
  {
    configuration_id: "region",
    configuration_label: "Edit Region Configuration",
  },
  {
    configuration_id: "cache",
    configuration_label: "Edit Cache Configuration",
  },
  {
    configuration_id: "compression",
    configuration_label: "Edit Compression Configuration",
  },
  { configuration_id: "etcd", configuration_label: "Edit Etcd Configuration" },
  {
    configuration_id: "identity_openid",
    configuration_label: "Edit Identity Openid Configuration",
  },
  {
    configuration_id: "identity_ldap",
    configuration_label: "Edit Identity LDAP Configuration",
  },
  {
    configuration_id: "logger_webhook",
    configuration_label: "Edit Logger Webhook Configuration",
  },
  {
    configuration_id: "audit_webhook",
    configuration_label: "Edit Audit Webhook Configuration",
  },
];

export const fieldsConfigurations: any = {
  region: [
    {
      name: "name",
      required: true,
      label: "Server Location",
      tooltip: 'Name of the location of the server e.g. "us-west-rack2"',
      type: "string",
      placeholder: "e.g. us-west-rack-2",
    },
    {
      name: "comment",
      required: false,
      label: "Comment",
      tooltip: "You can add a comment to this setting",
      type: "comment",
      placeholder: "Enter Comment",
    },
  ],
  cache: [
    {
      name: "drives",
      required: true,
      label: "Drives",
      tooltip:
        'Mountpoints e.g. "/optane1" or "/optane2", you can write one per field',
      type: "csv",
      placeholder: "Enter Mount Point",
    },
    {
      name: "expiry",
      required: false,
      label: "Expiry",
      tooltip: 'Cache expiry duration in days e.g. "90"',
      type: "number",
      placeholder: "Enter Number of Days",
    },
    {
      name: "quota",
      required: false,
      label: "Quota",
      tooltip: 'Limit cache drive usage in percentage e.g. "90"',
      type: "number",
      placeholder: "Enter in %",
    },
    {
      name: "exclude",
      required: false,
      label: "Exclude",
      tooltip:
        'Wildcard exclusion patterns e.g. "bucket/*.tmp" or "*.exe", you can write one per field',
      type: "csv",
      placeholder: "Enter Wildcard Exclusion Patterns",
    },
    {
      name: "after",
      required: false,
      label: "After",
      tooltip: "Minimum number of access before caching an object",
      type: "number",
      placeholder: "Enter Number of Attempts",
    },
    {
      name: "watermark_low",
      required: false,
      label: "Watermark Low",
      tooltip: "Watermark Low",
      type: "number",
      placeholder: "Enter Watermark Low",
    },
    {
      name: "watermark_high",
      required: false,
      label: "Watermark High",
      tooltip: "Watermark High",
      type: "number",
      placeholder: "Enter Watermark High",
    },
    {
      name: "comment",
      required: false,
      label: "Comment",
      tooltip: "You can add a comment to this setting",
      type: "comment",
      multiline: true,
      placeholder: "Enter Comment",
    },
  ],
  compression: [
    {
      name: "extensions",
      required: false,
      label: "Extensions",
      tooltip:
        'Extensions to compress e.g. ".txt",".log" or ".csv", you can write one per field',
      type: "csv",
      placeholder: "Enter an Extension",
      withBorder: true,
    },
    {
      name: "mime_types",
      required: false,
      label: "Mime Types",
      tooltip:
        'Mime types e.g. "text/*","application/json" or "application/xml", you can write one per field',
      type: "csv",
      placeholder: "Enter a Mime Type",
      withBorder: true,
    },
  ],
  etcd: [
    {
      name: "endpoints",
      required: true,
      label: "Endpoints",
      tooltip:
        'List of etcd endpoints e.g. "http://localhost:2379", you can write one per field',
      type: "csv",
      placeholder: "Enter Endpoint",
    },
    {
      name: "path_prefix",
      required: false,
      label: "Path Prefix",
      tooltip: 'namespace prefix to isolate tenants e.g. "customer1/"',
      type: "string",
      placeholder: "Enter Path Prefix",
    },
    {
      name: "coredns_path",
      required: false,
      label: "Coredns Path",
      tooltip: 'Shared bucket DNS records, default is "/skydns"',
      type: "string",
      placeholder: "Enter Coredns Path",
    },
    {
      name: "client_cert",
      required: false,
      label: "Client Cert",
      tooltip: "Client cert for mTLS authentication",
      type: "string",
      placeholder: "Enter Client Cert",
    },
    {
      name: "client_cert_key",
      required: false,
      label: "Client Cert Key",
      tooltip: "Client cert key for mTLS authentication",
      type: "string",
      placeholder: "Enter Client Cert Key",
    },
    {
      name: "comment",
      required: false,
      label: "Comment",
      tooltip: "You can add a comment to this setting",
      type: "comment",
      multiline: true,
      placeholder: "Enter Comment",
    },
  ],
  identity_openid: [
    {
      name: "config_url",
      required: false,
      label: "Config URL",
      tooltip: "Config URL for Client ID configuration",
      type: "string",
      placeholder: "Enter Config URL",
    },
    {
      name: "client_id",
      required: false,
      label: "Client ID",
      type: "string",
      placeholder: "Enter Client ID",
    },
    {
      name: "claim_name",
      required: false,
      label: "Claim Name",
      tooltip: "Claim Name",
      type: "string",
      placeholder: "Enter Claim Name",
    },
    {
      name: "claim_prefix",
      required: false,
      label: "Claim Prefix",
      tooltip: "Claim Prefix",
      type: "string",
      placeholder: "Enter Claim Prefix",
    },
  ],
  identity_ldap: [
    {
      name: "server_addr",
      required: true,
      label: "Server Addr",
      tooltip: 'AD/LDAP server address e.g. "myldapserver.com:636"',
      type: "string",
      placeholder: "Enter Server Address",
    },
    {
      name: "username_format",
      required: true,
      label: "Username Format",
      tooltip:
        'List of username bind DNs e.g. "uid=%s","cn=accounts","dc=myldapserver" or "dc=com", you can write one per field',
      type: "csv",
      placeholder: "Enter Username Format",
    },
    {
      name: "username_search_filter",
      required: true,
      label: "Username Search Filter",
      tooltip:
        'User search filter, for example "(cn=%s)" or "(sAMAccountName=%s)" or "(uid=%s)"',
      type: "string",
      placeholder: "Enter Username Search Filter",
    },
    {
      name: "group_search_filter",
      required: true,
      label: "Group Search Filter",
      tooltip:
        'Search filter for groups e.g. "(&(objectclass=groupOfNames)(memberUid=%s))"',
      type: "string",
      placeholder: "Enter Group Search Filter",
    },
    {
      name: "username_search_base_dn",
      required: false,
      label: "Username Search Base DN",
      tooltip: "List of username search DNs, you can write one per field",
      type: "csv",
      placeholder: "Enter Username Search Base DN",
    },
    {
      name: "group_name_attribute",
      required: false,
      label: "Group Name Attribute",
      tooltip: 'Search attribute for group name e.g. "cn"',
      type: "string",
      placeholder: "Enter Group Name Attribute",
    },
    {
      name: "sts_expiry",
      required: false,
      label: "STS Expiry",
      tooltip:
        'temporary credentials validity duration in s,m,h,d. Default is "1h"',
      type: "string",
      placeholder: "Enter STS Expiry",
    },
    {
      name: "tls_skip_verify",
      required: false,
      label: "TLS Skip Verify",
      tooltip:
        'Trust server TLS without verification, defaults to "off" (verify)',
      type: "on|off",
    },
    {
      name: "server_insecure",
      required: false,
      label: "Server Insecure",
      tooltip:
        'Allow plain text connection to AD/LDAP server, defaults to "off"',
      type: "on|off",
    },
    {
      name: "comment",
      required: false,
      label: "Comment",
      tooltip: "Optionally add a comment to this setting",
      type: "comment",
      placeholder: "Enter Comment",
    },
  ],
  logger_webhook: [
    {
      name: "endpoint",
      required: true,
      label: "Endpoint",
      type: "string",
      placeholder: "Enter Endpoint",
    },
    {
      name: "auth_token",
      required: true,
      label: "Auth Token",
      type: "string",
      placeholder: "Enter Auth Token",
    },
  ],
  audit_webhook: [
    {
      name: "endpoint",
      required: true,
      label: "Endpoint",
      type: "string",
      placeholder: "Enter Endpoint",
    },
    {
      name: "auth_token",
      required: true,
      label: "Auth Token",
      type: "string",
      placeholder: "Enter Auth Token",
    },
  ],
};

export const removeEmptyFields = (formFields: IElementValue[]) => {
  const nonEmptyFields = formFields.filter((field) => field.value !== "");

  return nonEmptyFields;
};
