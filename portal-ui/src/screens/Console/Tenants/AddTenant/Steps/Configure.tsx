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

import React, { Fragment, useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import {
  modalBasic,
  wizardCommon,
} from "../../../Common/FormComponents/common/styleLibrary";
import { isPageValid, updateAddField } from "../../actions";
import { AppState } from "../../../../../store";
import { clearValidationError } from "../../utils";
import {
  commonFormValidation,
  IValidation,
} from "../../../../../utils/validationFunctions";
import FormSwitchWrapper from "../../../Common/FormComponents/FormSwitchWrapper/FormSwitchWrapper";
import InputBoxWrapper from "../../../Common/FormComponents/InputBoxWrapper/InputBoxWrapper";
import SelectWrapper from "../../../Common/FormComponents/SelectWrapper/SelectWrapper";

interface IConfigureProps {
  updateAddField: typeof updateAddField;
  isPageValid: typeof isPageValid;
  storageClasses: any;
  classes: any;
  customImage: boolean;
  imageName: string;
  customDockerhub: boolean;
  imageRegistry: string;
  imageRegistryUsername: string;
  imageRegistryPassword: string;
  exposeMinIO: boolean;
  exposeConsole: boolean;
  prometheusCustom: boolean;
  logSearchCustom: boolean;
  logSearchVolumeSize: string;
  logSearchSizeFactor: string;
  prometheusVolumeSize: string;
  prometheusSizeFactor: string;
  logSearchSelectedStorageClass: string;
  logSearchImage: string;
  kesImage: string;
  logSearchPostgresImage: string;
  logSearchPostgresInitImage: string;
  prometheusSelectedStorageClass: string;
  prometheusImage: string;
  prometheusSidecarImage: string;
  prometheusInitImage: string;
  selectedStorageClass: string;
}

const styles = (theme: Theme) =>
  createStyles({
    buttonContainer: {
      textAlign: "right",
    },
    ...modalBasic,
    ...wizardCommon,
  });

const Configure = ({
  classes,
  storageClasses,
  customImage,
  imageName,
  customDockerhub,
  imageRegistry,
  imageRegistryUsername,
  imageRegistryPassword,
  exposeMinIO,
  exposeConsole,
  prometheusCustom,
  logSearchCustom,
  logSearchVolumeSize,
  logSearchSizeFactor,
  logSearchImage,
  kesImage,
  logSearchPostgresImage,
  logSearchPostgresInitImage,
  prometheusVolumeSize,
  prometheusSizeFactor,
  logSearchSelectedStorageClass,
  prometheusSelectedStorageClass,
  prometheusImage,
  prometheusSidecarImage,
  prometheusInitImage,
  updateAddField,
  isPageValid,
  selectedStorageClass,
}: IConfigureProps) => {
  const [validationErrors, setValidationErrors] = useState<any>({});

  // Common
  const updateField = useCallback(
    (field: string, value: any) => {
      updateAddField("configure", field, value);
    },
    [updateAddField]
  );

  // Validation
  useEffect(() => {
    let customAccountValidation: IValidation[] = [];

    if (prometheusCustom) {
      customAccountValidation = [
        ...customAccountValidation,
        {
          fieldKey: "prometheus_storage_class",
          required: true,
          value: prometheusSelectedStorageClass,
          customValidation: prometheusSelectedStorageClass === "",
          customValidationMessage: "Field cannot be empty",
        },
        {
          fieldKey: "prometheus_volume_size",
          required: true,
          value: prometheusVolumeSize,
          customValidation:
            prometheusVolumeSize === "" || parseInt(prometheusVolumeSize) <= 0,
          customValidationMessage: `Volume size must be present and be greatter than 0`,
        },
      ];
    }
    if (logSearchCustom) {
      customAccountValidation = [
        ...customAccountValidation,
        {
          fieldKey: "log_search_storage_class",
          required: true,
          value: logSearchSelectedStorageClass,
          customValidation: logSearchSelectedStorageClass === "",
          customValidationMessage: "Field cannot be empty",
        },
        {
          fieldKey: "log_search_volume_size",
          required: true,
          value: logSearchVolumeSize,
          customValidation:
            logSearchVolumeSize === "" || parseInt(logSearchVolumeSize) <= 0,
          customValidationMessage: `Volume size must be present and be greatter than 0`,
        },
      ];
    }

    if (customImage) {
      customAccountValidation = [
        ...customAccountValidation,
        {
          fieldKey: "image",
          required: false,
          value: imageName,
          pattern: /^((.*?)\/(.*?):(.+))$/,
          customPatternMessage: "Format must be of form: 'minio/minio:VERSION'",
        },
        {
          fieldKey: "logSearchImage",
          required: false,
          value: logSearchImage,
          pattern: /^((.*?)\/(.*?):(.+))$/,
          customPatternMessage:
            "Format must be of form: 'minio/logsearchapi:VERSION'",
        },
        {
          fieldKey: "kesImage",
          required: false,
          value: kesImage,
          pattern: /^((.*?)\/(.*?):(.+))$/,
          customPatternMessage: "Format must be of form: 'minio/kes:VERSION'",
        },
        {
          fieldKey: "logSearchPostgresImage",
          required: false,
          value: logSearchPostgresImage,
          pattern: /^((.*?)\/(.*?):(.+))$/,
          customPatternMessage:
            "Format must be of form: 'library/postgres:VERSION'",
        },
        {
          fieldKey: "logSearchPostgresInitImage",
          required: false,
          value: logSearchPostgresInitImage,
          pattern: /^((.*?)\/(.*?):(.+))$/,
          customPatternMessage:
            "Format must be of form: 'library/busybox:VERSION'",
        },
        {
          fieldKey: "prometheusImage",
          required: false,
          value: prometheusImage,
          pattern: /^((.*?)\/(.*?):(.+))$/,
          customPatternMessage:
            "Format must be of form: 'minio/prometheus:VERSION'",
        },
        {
          fieldKey: "prometheusSidecarImage",
          required: false,
          value: prometheusSidecarImage,
          pattern: /^((.*?)\/(.*?):(.+))$/,
          customPatternMessage:
            "Format must be of form: 'project/container:VERSION'",
        },
        {
          fieldKey: "prometheusInitImage",
          required: false,
          value: prometheusInitImage,
          pattern: /^((.*?)\/(.*?):(.+))$/,
          customPatternMessage:
            "Format must be of form: 'library/busybox:VERSION'",
        },
      ];
      if (customDockerhub) {
        customAccountValidation = [
          ...customAccountValidation,
          {
            fieldKey: "registry",
            required: true,
            value: imageRegistry,
          },
          {
            fieldKey: "registryUsername",
            required: true,
            value: imageRegistryUsername,
          },
          {
            fieldKey: "registryPassword",
            required: true,
            value: imageRegistryPassword,
          },
        ];
      }
    }

    const commonVal = commonFormValidation(customAccountValidation);

    isPageValid("configure", Object.keys(commonVal).length === 0);

    setValidationErrors(commonVal);
  }, [
    customImage,
    imageName,
    logSearchImage,
    kesImage,
    logSearchPostgresImage,
    logSearchPostgresInitImage,
    prometheusImage,
    prometheusSidecarImage,
    prometheusInitImage,
    customDockerhub,
    imageRegistry,
    imageRegistryUsername,
    imageRegistryPassword,
    isPageValid,
    prometheusCustom,
    logSearchCustom,
    prometheusSelectedStorageClass,
    prometheusVolumeSize,
    logSearchSelectedStorageClass,
    logSearchVolumeSize,
  ]);

  useEffect(() => {
    // New default values is current selection is invalid
    if (storageClasses.length > 0) {
      const filterPrometheus = storageClasses.filter(
        (item: any) => item.value === prometheusSelectedStorageClass
      );
      if (filterPrometheus.length === 0) {
        updateField("prometheusSelectedStorageClass", selectedStorageClass);
      }

      const filterLogSearch = storageClasses.filter(
        (item: any) => item.value === logSearchSelectedStorageClass
      );
      if (filterLogSearch.length === 0) {
        updateField("logSearchSelectedStorageClass", selectedStorageClass);
      }
    }
  }, [
    logSearchSelectedStorageClass,
    prometheusSelectedStorageClass,
    selectedStorageClass,
    storageClasses,
    updateField,
  ]);

  const cleanValidation = (fieldName: string) => {
    setValidationErrors(clearValidationError(validationErrors, fieldName));
  };

  return (
    <Paper className={classes.paperWrapper}>
      <div className={classes.headerElement}>
        <h3 className={classes.h3Section}>Configure</h3>
        <span className={classes.descriptionText}>
          Basic configurations for tenant management
        </span>
      </div>
      <div className={classes.headerElement}>
        <h3 className={classes.h3Section}>Expose Services</h3>
        <span className={classes.descriptionText}>
          Whether the tenant's services should request an external IP.
        </span>
      </div>
      <Grid item xs={12}>
        <FormSwitchWrapper
          value="expose_minio"
          id="expose_minio"
          name="expose_minio"
          checked={exposeMinIO}
          onChange={(e) => {
            const targetD = e.target;
            const checked = targetD.checked;

            updateField("exposeMinIO", checked);
          }}
          label={"Expose MiniO Service"}
        />
      </Grid>
      <Grid item xs={12}>
        <FormSwitchWrapper
          value="expose_console"
          id="expose_console"
          name="expose_console"
          checked={exposeConsole}
          onChange={(e) => {
            const targetD = e.target;
            const checked = targetD.checked;

            updateField("exposeConsole", checked);
          }}
          label={"Expose Console Service"}
        />
      </Grid>

      <div className={classes.headerElement}>
        <h3 className={classes.h3Section}>Additional Configurations</h3>
        <span className={classes.descriptionText}>
          Configure Storage Classes & Storage size for Log Search and Prometheus
          add-ons
        </span>
      </div>
      <Grid item xs={12}>
        <FormSwitchWrapper
          value="logSearchConfig"
          id="log_search_configuration"
          name="log_search_configuration"
          checked={logSearchCustom}
          onChange={(e) => {
            const targetD = e.target;
            const checked = targetD.checked;

            updateField("logSearchCustom", checked);
          }}
          label={"Override Log Search defaults"}
        />
      </Grid>
      {logSearchCustom && (
        <Fragment>
          <Grid item xs={12}>
            <SelectWrapper
              id="log_search_storage_class"
              name="log_search_storage_class"
              onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
                updateField(
                  "logSearchSelectedStorageClass",
                  e.target.value as string
                );
              }}
              label="Log Search Storage Class"
              value={logSearchSelectedStorageClass}
              options={storageClasses}
              disabled={storageClasses.length < 1}
            />
          </Grid>
          <Grid item xs={12}>
            <div className={classes.multiContainer}>
              <div>
                <InputBoxWrapper
                  type="number"
                  id="log_search_volume_size"
                  name="log_search_volume_size"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    updateField("logSearchVolumeSize", e.target.value);
                    cleanValidation("log_search_volume_size");
                  }}
                  label="Storage Size [Gi]"
                  value={logSearchVolumeSize}
                  required
                  error={validationErrors["log_search_volume_size"] || ""}
                  min="0"
                />
              </div>
            </div>
          </Grid>
          <br />
        </Fragment>
      )}
      <Grid item xs={12}>
        <FormSwitchWrapper
          value="prometheusConfig"
          id="prometheus_configuration"
          name="prometheus_configuration"
          checked={prometheusCustom}
          onChange={(e) => {
            const targetD = e.target;
            const checked = targetD.checked;

            updateField("prometheusCustom", checked);
          }}
          label={"Override Prometheus defaults"}
        />
      </Grid>
      {prometheusCustom && (
        <Fragment>
          <Grid item xs={12}>
            <SelectWrapper
              id="prometheus_storage_class"
              name="prometheus_storage_class"
              onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
                updateField(
                  "prometheusSelectedStorageClass",
                  e.target.value as string
                );
              }}
              label="Prometheus Storage Class"
              value={prometheusSelectedStorageClass}
              options={storageClasses}
              disabled={storageClasses.length < 1}
            />
          </Grid>
          <Grid item xs={12}>
            <div className={classes.multiContainer}>
              <div>
                <InputBoxWrapper
                  type="number"
                  id="prometheus_volume_size"
                  name="prometheus_volume_size"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    updateField("prometheusVolumeSize", e.target.value);
                    cleanValidation("prometheus_volume_size");
                  }}
                  label="Storage Size [Gi]"
                  value={prometheusVolumeSize}
                  required
                  error={validationErrors["prometheus_volume_size"] || ""}
                  min="0"
                />
              </div>
            </div>
          </Grid>
          <br />
        </Fragment>
      )}
    </Paper>
  );
};

const mapState = (state: AppState) => ({
  storageClasses: state.tenants.createTenant.storageClasses,
  customImage: state.tenants.createTenant.fields.configure.customImage,
  imageName: state.tenants.createTenant.fields.configure.imageName,
  customDockerhub: state.tenants.createTenant.fields.configure.customDockerhub,
  imageRegistry: state.tenants.createTenant.fields.configure.imageRegistry,
  imageRegistryUsername:
    state.tenants.createTenant.fields.configure.imageRegistryUsername,
  imageRegistryPassword:
    state.tenants.createTenant.fields.configure.imageRegistryPassword,
  exposeMinIO: state.tenants.createTenant.fields.configure.exposeMinIO,
  exposeConsole: state.tenants.createTenant.fields.configure.exposeConsole,
  prometheusCustom:
    state.tenants.createTenant.fields.configure.prometheusCustom,
  logSearchCustom: state.tenants.createTenant.fields.configure.logSearchCustom,
  logSearchVolumeSize:
    state.tenants.createTenant.fields.configure.logSearchVolumeSize,
  logSearchSizeFactor:
    state.tenants.createTenant.fields.configure.logSearchSizeFactor,
  prometheusVolumeSize:
    state.tenants.createTenant.fields.configure.prometheusVolumeSize,
  prometheusSizeFactor:
    state.tenants.createTenant.fields.configure.prometheusSizeFactor,
  logSearchSelectedStorageClass:
    state.tenants.createTenant.fields.configure.logSearchSelectedStorageClass,
  logSearchImage: state.tenants.createTenant.fields.configure.logSearchImage,
  kesImage: state.tenants.createTenant.fields.configure.kesImage,
  logSearchPostgresImage:
    state.tenants.createTenant.fields.configure.logSearchPostgresImage,
  logSearchPostgresInitImage:
    state.tenants.createTenant.fields.configure.logSearchPostgresInitImage,
  prometheusSelectedStorageClass:
    state.tenants.createTenant.fields.configure.prometheusSelectedStorageClass,
  prometheusImage: state.tenants.createTenant.fields.configure.prometheusImage,
  prometheusSidecarImage:
    state.tenants.createTenant.fields.configure.prometheusSidecarImage,
  prometheusInitImage:
    state.tenants.createTenant.fields.configure.prometheusInitImage,
  selectedStorageClass:
    state.tenants.createTenant.fields.nameTenant.selectedStorageClass,
});

const connector = connect(mapState, {
  updateAddField,
  isPageValid,
});

export default withStyles(styles)(connector(Configure));
