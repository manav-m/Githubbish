import React from 'react';
import { render, screen } from '@testing-library/react';
import FileDisplay from '../FileDisplay';
import { sampleFile } from '../../fixtures';

test('renders learn react link', () => {
	render(<FileDisplay file={sampleFile} />);
	const linkElement = screen.getByText(/README.md/i);
	expect(linkElement).toBeInTheDocument();
});
