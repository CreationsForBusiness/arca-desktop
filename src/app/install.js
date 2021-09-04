import { useTranslate } from 'react-translate';


const Install = ({ db, setError, setLoading, settings }) => {
  const t = useTranslate('install');

  return (
    <>
      {t('welcome')}
    </>
  )
  
}

export default Install