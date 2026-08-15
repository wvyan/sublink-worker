import { describe, expect, it } from 'vitest';
import { addProxyWithDedup } from '../src/builders/helpers/proxyHelpers.js';

describe('addProxyWithDedup', () => {
    it('renames exact duplicates without treating substrings as duplicates', () => {
        const proxies = [];

        addProxyWithDedup(proxies, { name: 'bwg-hy2', server: 'hy2.example' });
        addProxyWithDedup(proxies, { name: 'bwg', server: 'reality.example' });
        addProxyWithDedup(proxies, { name: 'bwg', server: 'ws-1.example' });
        addProxyWithDedup(proxies, { name: 'bwg', server: 'ws-2.example' });

        expect(proxies.map(proxy => proxy.name)).toEqual([
            'bwg-hy2',
            'bwg',
            'bwg 2',
            'bwg 3'
        ]);
    });
});
