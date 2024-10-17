

const RepositoryDisplay = ({ repo }) => {
    return (
        <div className="w-80 bg-white border border-gray-200 rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between mb-2">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        <h2 className="text-base font-semibold text-gray-800">{repo.name}</h2>
        </a>
      </div>
      <p className="text-sm text-gray-600 mb-3">
        {repo.description}
      </p>
      <div className="flex items-center space-x-4 text-xs">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-yellow-400 rounded-full mr-1"></div>
          <span className="text-gray-600">{repo.language}</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          <span>{repo.forks_count}</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span>{repo.open_issues_count}</span>
        </div>
      </div>
    </div>
      );
}

export default RepositoryDisplay


// return (
//     <div className="repo-display">
//       <h2>{repo.name}</h2>
//       <p>{repo.description}</p>
//       <ul>
//         <li>Stars: {repo.stargazers_count}</li>
//         <li>Forks: {repo.forks_count}</li>
//         <li>Open Issues: {repo.open_issues_count}</li>
//       </ul>
//       <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
//     </div>
//   );