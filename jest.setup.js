import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import { TextDecoder, TextEncoder } from 'util';

global.TextDecoder = TextDecoder;
global.TextEncoder = TextEncoder;
