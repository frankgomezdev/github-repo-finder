import { useState } from 'react';
import LanguageSelector from './components/LanguageSelector'
import FetchButton from './components/FetchButton';
import RepositoryDisplay from './components/RepositoryDisplay';
import { fetchRandomRepo } from './api/github';
import './index.css'


function App() {
  const [language, setLanguage] = useState('');
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRepo = async (selectedLanguage) => {
    setLoading(true);
    setError(null);
    try {
      const randomRepo = await fetchRandomRepo(selectedLanguage || language);
      console.log(randomRepo)
      setRepo(randomRepo);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch repository. Please try again.');
    }
    setLoading(false);
  };

  return(
    <div className='flex flex-col justify-center items-center h-screen bg-slate-600 gap-y-8'>
      <h1 className="text-5xl">Github Repository Finder</h1>
      <LanguageSelector language={language} setLanguage={setLanguage} fetchRepo={fetchRepo} />
      {loading && <p>Loading...</p>}
      {error && <p className='error'>{error}</p>}
      {repo && <RepositoryDisplay repo={repo} />}
      {repo && <FetchButton onClick={() => fetchRepo(language)} disabled={loading} />}
    </div>
  )
}

export default App
