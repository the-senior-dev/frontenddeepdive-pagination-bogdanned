// __tests__/fetch.test.js
import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Pagination from './Pagination'

test('loads and displays greeting', async () => {
  // Arrange
  const pageTotal = 10;
  const currentPage = 2;
  const setCurrentPage = jest.fn();
  render(<Pagination pageTotal={pageTotal} currentPage={currentPage} setCurrentPage={setCurrentPage}/>)

  fireEvent.click(screen.getByTestId('btn-first'))

  expect(setCurrentPage).toHaveBeenCalledTimes(1);

})
