import { useState } from 'react';
import styles from './styles.module.scss';
import { CaretDownFilled, CheckOutlined } from '@ant-design/icons';

const Select = ({ options=[] }) => {
  const [selectedOption, setSelectedOption] = useState({});
  const [optionsVisiblity, toggleOptionsVisibility] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option)
    toggleOptionsVisibility(false);
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.selected} onClick={() => toggleOptionsVisibility(!optionsVisiblity)}>
        {selectedOption.label || 'Select a type'}
        <CaretDownFilled />  
      </div>
      {
        optionsVisiblity && (
          <div className={styles.options}>
            {
              options.map(o => (
                <div key={o.value} className={styles.option} onClick={() => handleSelect(o)}>
                  {o.label} {selectedOption.value === o.value && <CheckOutlined />}
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default Select;