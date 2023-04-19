import styles from './OptionSize.module.scss';
import clsx from 'clsx';

const OptionSize = props => {
    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
            {props.sizes.map((size, id) =>  //size.name w key i bez id tutaj
                <li key={id}>
                <button 
                    type="button" 
                    onClick={() => {props.setCurrentSize(size.name); props.setCurrentPrice(size.additionalPrice)}} className={clsx(size.name === props.currentSize && styles.active)}>
                    {size.name}
                </button>
                </li>
            )}
            </ul>
        </div>
    )
}

export default OptionSize;