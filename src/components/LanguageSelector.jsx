import { Field } from './catalyst_ui/fieldset'
import { Select } from './catalyst_ui/select'
import programmingLanguages from '../data/programming_languages.json'

function LanguageSelector({ language, setLanguage, fetchRepo }) {
    const handleChange = (e) => {
        const selectedLanguage = e.target.value;
        setLanguage(selectedLanguage);
        fetchRepo(selectedLanguage)
    };

  return (
    <Field>
      <Select 
      name="programming_language"
      value={language}
      onChange={handleChange}
      >
        {programmingLanguages.map((language, index) => (
            <option key={index} value={language.value}>
                {language.title}
            </option>
        ))}
      </Select>
    </Field>
  )
}

export default LanguageSelector