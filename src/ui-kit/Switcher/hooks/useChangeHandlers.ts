import { useEffect, useState } from 'react';
import { SwitcherProps } from '../types';


export interface UseChangeHandlersProps {
  imperativeChecked: SwitcherProps['checked'];
  onChange: SwitcherProps['onChange'];
}

export interface UseChangeHandlersReturn {
  checked: boolean;
  loading: boolean;
  handleChange: () => void;
}

export const useChangeHandlers = (
  props: UseChangeHandlersProps,
): UseChangeHandlersReturn => {
  const { imperativeChecked, onChange } = props;

  const [checked, setChecked] = useState<boolean>(Boolean(imperativeChecked));
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setChecked(Boolean(imperativeChecked));
  }, [imperativeChecked]);

  const handleChange = async () => {
    setLoading(true);
    try {
      if (typeof onChange === 'function') {
        await onChange(!checked);
      }
    } catch {
      setLoading(false);
    }
    setLoading(false);
    setChecked(!checked);
  };

  return {
    checked,
    loading,
    handleChange,
  };
};
