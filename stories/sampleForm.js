import React, { Component, PropTypes } from 'react';
import { Fields, Field, reduxForm } from 'redux-form';

import { RenderInput, RenderSelect, FormGroup, FormGroupTitle } from '../src/components/forms/inputs';
import DateRangePicker from '../src/components/forms/dateRangePicker';
import { normalizeDecimalSeperator } from '../src/utils/normalizers/normalizeDecimalSeperator';


const formatDates = (value, name) => {
    // return moment(value);
    return value
};

class SimpleForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit} className="wfp-form--stacked">
        <div>

          <p>This is a form. There can be blocks which are defined by FormGroups. A semantic unit has the prop type="seperate".</p>

          <FormGroup type="seperate">
            <FormGroupTitle>A FormGroupTitle</FormGroupTitle>
              <Field
                name="cfm_comp"
                type="text"
                component={RenderInput}
                label="A <RenderInput /> Element with an Info Tooltip"
                format={normalizeDecimalSeperator}
                info="Hello World!"
                normalize={normalizeDecimalSeperator}
                wrapper
            />
            <Field
                name="cfm_comp"
                type="text"
                component={RenderSelect}
                label="A <RenderSelect /> Element which is required"
                isRequired
                selectList={['First Element', 'Second Elemend']}
                format={normalizeDecimalSeperator}
                normalize={normalizeDecimalSeperator}
                wrapper
            />
           <Fields
                names={['access_from', 'access_to']}
                component={DateRangePicker}
                label="A DateRangePicker"
                format={formatDates}   
            />
          </FormGroup>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    )
  }
}


export default SimpleForm = reduxForm({
    form: 'SimpleForm',  //Form name is same
    enableReinitialize: true,
    /*validate*/
})(SimpleForm)