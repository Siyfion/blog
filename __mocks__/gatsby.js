const gatsby = jest.requireActual('gatsby')
module.exports = {
  ...gatsby,
  graphql: jest.fn().mockReturnValue(''),
  useStaticQuery: jest.fn(),
  Link: 'Link',
}
