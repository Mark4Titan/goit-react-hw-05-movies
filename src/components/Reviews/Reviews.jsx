import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box } from '../../Box';

import { getMoviesReview } from 'api/api';

export const Reviews = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const [fetchedError, setFetchedError] = useState(null);

  //
  const { id } = useParams();

  useEffect(() => {
    (async function () {
      try {
        const respone = await getMoviesReview({ id, language: 'en-US' });
        setFetchedData(respone.data);
      } catch (error) {
        setFetchedError(`  ${error.message}  `);
      }
    })();
  }, [id]);

  return (
    <Box padding="16px">
      {fetchedData?.results.map(({ author, content }) => (
        <div key={author}>
          <h3>{author}</h3>
          <p>{content}</p>
        </div>
      ))}
      {fetchedData?.results.length === 0 && <p>Еще не написали</p>}
      {fetchedError && <p>{fetchedError}</p>}
    </Box>
  );
};
