import { useState } from 'react';
import styles from './styles.module.scss';
import { CaretDownFilled, CheckOutlined } from '@ant-design/icons';

const Select = ({ options=[], onChange, defaultValue }) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue || {});
  const [optionsVisiblity, toggleOptionsVisibility] = useState(false);

  const handleSelect = (option) => {
    toggleOptionsVisibility(false);
    if (selectedOption.value == option.value)
    {
      return;
    }
    setSelectedOption(option)
    onChange && onChange(option);
  }
  
  return (
    <div className={styles.container} role="button">
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