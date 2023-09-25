import { observer } from 'mobx-react-lite';
import { Box, Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UIInput } from '../../components/UI/Input';
import { UIPassword } from '../../components/UI/PasswordInput';
import { UIButton } from '../../components/UI/Button';
import { getApiResource } from '../../utils/network';
import { URL_USERS } from '../../constants/api';
import { Users } from '../../types/interfaces';
import { setLocalStorage } from '../../utils/localStore';
import { useStore } from '../../utils/hooks/useStore';

export const Authorization = observer(() => {
  const {
    rootStore: { authStore },
  } = useStore();

  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState('');
  const [nameError, setNameError] = useState(false);
  const [nameTextError, setNameTextError] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [users, setUsers] = useState<Users[]>([]);

  const handleSubmit = () => {
    users.forEach(({name, password, fullName, avatar}) => {
      const checkName = name === nameValue;
      const checkPwd = password === passwordValue;
      if (checkName && checkPwd) {
        setLocalStorage('access', {status: true, fullName, avatar});
        authStore.setAuthStore(true);
        navigate('/main');
      } else {
        setNameError(true);
        setNameTextError(true);
        setPasswordError(true);
      }
    });
  };

  const getResources = async(url: string) => {
    const res = await getApiResource(url);
    if(res) {
      if(res.data.length) {
        setUsers(res.data);
      }
    }
  };

  useEffect(()=> {
    getResources(URL_USERS);
  }, []);

  return (
    <Box
      sx={{ 
        width: '440px', 
        height: '440px', 
        p: '20px', 
        bgcolor:  'primary.main', 
        m: 'auto', 
        mt: '100px', 
        borderRadius: '20px', 
      }}
    >
      <Stack 
        sx={{ maxWidth: '300px', 
          m: 'auto', 
          mt: '100px', 
          p: '20px', 
          bgcolor: 'white', 
          borderRadius: '8px',  
        }}
        spacing={2}
      >
        <UIInput  
          value={nameValue}
          setValue={setNameValue}
          error={nameError}
          setError={setNameError}
          textError={nameTextError}
          setTextError={setNameTextError}
        />
        <UIPassword 
          value={passwordValue}
          setValue={setPasswordValue}
          error={passwordError}
          setError={setPasswordError}
        />
        <UIButton 
          text={'Submit'}
          onClick={() => handleSubmit()}
        />
      </Stack>
    </Box>
  );
});