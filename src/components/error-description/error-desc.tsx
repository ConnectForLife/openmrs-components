import React from 'react';
import './error-desc.scss'

const ErrorDesc = (props: IErrorDescProps) => {
  const { field } = props;

  if (!!field) {
    return (
      <div className="error-description">
        {field}
      </div>
    );
  } else return null;
};

export default ErrorDesc;

interface IErrorDescProps {
  field: string
};
