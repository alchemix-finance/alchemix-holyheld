import { useContractWrite } from 'wagmi';
import { useEffect, useState } from 'react';
import { Abi, Address } from 'viem';
import { alchemistV2Abi } from '../../src/abi/alchemistV2';

interface UseContractMethodProps {
  abi: Abi;
  address: Address;
  functionName: string;
  args: any[];
}

export const useContractMethod = ({ abi, address, functionName, args }: UseContractMethodProps) => {
  const { config, error: prepareError } = useContractWrite({
    abi,
    address,
    functionName,
    args,
  });

  const { write, isSuccess, error: writeError } = useContractWrite(config);

  return {
    execute: write,
    isSuccess,
    prepareError,
    writeError,
  };
};
