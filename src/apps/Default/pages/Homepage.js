import React, { useState, useEffect } from 'react';
import Container from '../../../layout/container_user';
// import { checkApplicationVersion } from '../../../utils/helpers';
import {
  EuiButton,
  EuiForm,
  EuiFormRow, EuiFieldText,
  EuiSelect,
  EuiText,
  EuiLink,
  EuiSpacer,
  EuiCheckbox
} from '@elastic/eui';

export default (props) => {
  // const [checkedVersion, setCheckedVersion] = useState(false);

  // useEffect(() => {
  //   if(checkedVersion === false) {
  //     checkApplicationVersion();
  //     setCheckedVersion(true);
  //   }
  // }, [checkedVersion]);

  return <Container app="Dashboard" page="Homepage">
    <div>
      <h1>Welcome.</h1>
      <p>To get started please pick an application from the left menu.</p>
      <div style={{ marginTop: 8 }} />
      <EuiButton>test</EuiButton>
      <EuiButton fill style={{ marginLeft: 6 }}>test</EuiButton>
    </div>
    <EuiForm style={{ marginTop: 12 }} component="form">
      <EuiFormRow label="Text field" helpText="I am some friendly help text.">
        <EuiFieldText name="first" />
      </EuiFormRow>

      <EuiFormRow label="Text field" helpText="I am some friendly help text.">
        <EuiFieldText name="first" prepend="Prepend" />
      </EuiFormRow>
      <EuiFormRow
        label="Select (with no initial selection)"
        labelAppend={
          <EuiText size="xs">
            <EuiLink>Link to some help</EuiLink>
          </EuiText>
        }>
        <EuiSelect
          hasNoInitialSelection
          options={[
            { value: 'option_one', text: 'Option one' },
            { value: 'option_two', text: 'Option two' },
            { value: 'option_three', text: 'Option three' },
          ]}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiCheckbox
          id={'id-group'}
          label="I am a compressed checkbox"
          checked={false}
          compressed
        />
      </EuiFormRow>
    </EuiForm>
    <div style={{ height: 1900 }} />
  </Container>
}