import React from 'react';
import { DetailsPersonalDataInputs } from '../DetailsPersonalDataInputs';
import { LaboralDataInput } from '../LaboralDataInput';
import { PersonalDataInputs } from '../PersonalDataInputs';
import { UpLoadImageInput } from '../UpLoadImageInput';

interface StepContentProps {
  step: number;
  values: any;
  touched: any;
  errors: any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StepContent = ({ step, values, touched, errors, handleChange }: StepContentProps) => {
  switch (step) {
    case 0:
      return <PersonalDataInputs values={values} handleChange={handleChange} touched={touched} errors={errors} />;
    case 1:
      return <DetailsPersonalDataInputs values={values} handleChange={handleChange} touched={touched} errors={errors} />;
    case 2:
      return <LaboralDataInput values={values} handleChange={handleChange} touched={touched} errors={errors} />;
    case 3:
      return <UpLoadImageInput values={values} handleChange={handleChange} touched={touched} errors={errors} />;
    default:
      return null;
  }
};

export default StepContent;