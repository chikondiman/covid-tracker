import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api'

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchCountries = async () => {
            setFetchedCountries(await fetchCountries);

        }
        // fetchAPI();
    }, [setFetchedCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => {}}>
                <option value="global">Global </option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}> </option>)}
            </NativeSelect>
        </FormControl>

    )
}

export default CountryPicker;