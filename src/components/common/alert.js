import SweetAlert from 'sweetalert-react';
import React from 'react';

const AlertModel = (props) => {

  return (
    <SweetAlert
      show={props.show_alert}
      text={'text value'}
      title={'Title'}
      showConfirmButton={false}
    />
  );

}

export default AlertModel;
