import { supabaseURL, supabaseKEY } from "../supabase";


describe('check api keys', () => {
    const OLD_ENV = process.env;

    beforeEach(() => {
        jest.resetModules();
        process.env = {...OLD_ENV};
    });

    afterAll(() => {
        process.env = OLD_ENV;
    });

    test('Check URL', () => {
        expect(process.env.EXPO_PUBLIC_SUPABASE_URL).toBeTruthy();
    });

    test('Check Key', () => {
        expect(process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY).toBeTruthy();
    })

})



