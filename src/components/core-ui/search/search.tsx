import { useEffect, useState } from 'react';

import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import { useDebounce } from 'helpers/crud-helper/crud-helpers';

interface Props {
  onUpdateState: (searchTerm: string) => void;
  isDebounced?: boolean;
}

function Search({ onUpdateState, isDebounced = true }: Props) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const debouncedSearchTerm = useDebounce(searchTerm, 150);

  useEffect(() => {
    if (isDebounced && debouncedSearchTerm !== undefined && searchTerm !== undefined) {
      onUpdateState(debouncedSearchTerm);
    } else {
      onUpdateState(searchTerm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm, isDebounced, searchTerm]);

  return (
    <Input
      className='w-80'
      suffix={<SearchOutlined />}
      size='large'
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder='Search'
    />
  );
}

export { Search };
