import React, { useEffect, useState, useCallback } from 'react';
import { Flex, Icon, IconButton, Text } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { format, startOfMonth, endOfMonth, addMonths, subMonths, getYear } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR/index';

interface PeriodDateProps {
  onSelected(startDate: string, endDate: string): void;
}

export const PeriodDate: React.FC<PeriodDateProps> = ({ onSelected }): React.ReactElement => {
  const [period, setPeriod] = useState({
    start: startOfMonth(Date.now()),
    end: endOfMonth(Date.now()),
  });

  const Navigate = (startDate: Date): void => {
    setPeriod({
      start: startOfMonth(startDate),
      end: endOfMonth(startDate),
    });
  };

  const handleDecMonth = (): void => {
    const date = subMonths(startOfMonth(new Date(period.start)), 1);
    Navigate(date);
  };

  const handleIncMonth = (): void => {
    const date = addMonths(startOfMonth(new Date(period.start)), 1);
    Navigate(date);
  };

  const convertDate = (date: Date): string => format(date, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

  const selected = useCallback(() => (): void => onSelected(convertDate(period.start), convertDate(period.end)), [
    onSelected,
    period.end,
    period.start,
  ]);

  useEffect(() => {
    selected();
  }, [period, selected]);

  return (
    <Flex align="center">
      <IconButton bg="none" fontSize={20} onClick={handleDecMonth} aria-label="Light theme" color="pink.500">
        <Icon as={FiChevronLeft} />
      </IconButton>
      <Flex w={160} justify="center">
        <Text color="pink.500" fontWeight="semibold">
          {format(new Date(period.start), 'LLLL', { locale: ptBR }).toUpperCase()}{' '}
          {getYear(period.start) !== getYear(Date.now()) && ` | ${getYear(period.start)}`}
        </Text>
      </Flex>
      <IconButton bg="none" fontSize={20} onClick={handleIncMonth} aria-label="Light theme" color="pink.500">
        <Icon as={FiChevronRight} />
      </IconButton>
    </Flex>
  );
};

export default PeriodDate;
