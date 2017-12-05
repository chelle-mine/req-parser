const expect = require('chai').expect;
const request = require('request');

const host = 'http://localhost:3000';

describe('Parsing incoming requests', () => {
    it('Correctly identifies client IP address', (done) => {
        const options = {
            url: host,
            localAddress: '127.0.0.1'
        };

        request(options, (err, res, body) => {
            const parsedRes = JSON.parse(res.body);
            expect(parsedRes['localaddress']).to.equal('127.0.0.1');
        });

        done();
    });

    it('Correctly identifies client language', (done) => {
        const options = {
            url: host, 
            headers: {
                'accept-language': 'da, en-gb;q=0.8, en;1=0.7'
            }
        };

        request(options, (err, res, body) => {
            const parsedRes = JSON.parse(res.body);
            expect(parsedRes['accept-language']).to.equal('da, en-gb;q=0.8, en;1=0.7');
        });

        done();
    });
    it('Correctly identifies client operating system', (done) => {
        const options = {
            url: host,
            headers: {
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246' 
            }
        }

        request(options, (err, res, body) => {
            const parsedRes = JSON.parse(res.body);
            expect(parsedRes['user-agent']).to.equal('Windows NT 10.0; Win64; x64');
        });

        done();
    });
});
