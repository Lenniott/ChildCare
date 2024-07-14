//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const emmaContribution = 50; // Fixed personal contribution for Emma
const clareContribution = 50; // Fixed personal contribution for Clare

// Helper function to calculate account amount
function calculateAccountAmount(provider1, provider2, contribution) {
  const totalInvoice = (parseInt(provider1, 10) || 0) + (parseInt(provider2, 10) || 0)
  const amount = totalInvoice - (contribution)
  return Math.ceil(amount)
}

// Route for start page
router.get('/', function (req, res) {
  // Clear session data when navigating back to accounts
  req.session.data = {}
  res.render('index', { emmaContribution, clareContribution })
})

// Route for cost per child page
router.get('/cost-per-child', function (req, res) {
  res.render('cost-per-child', { data: req.session.data })
})

// Route for saving cost per child
router.post('/cost-per-child', function (req, res) {
  // Save form data to session
  req.session.data = {
    'cost-child1-provider1': req.body['cost-child1-provider1'],
    'cost-child1-provider2': req.body['cost-child1-provider2'],
    'cost-child2-provider1': req.body['cost-child2-provider1'],
    'cost-child2-provider2': req.body['cost-child2-provider2']
  }
  res.redirect('/check-values')
})

// Route for check values page
router.get('/check-values', function (req, res) {
  res.render('check-values', {
    request: req,
    emmaContribution,
    clareContribution,
    'costChild1Provider1': req.session.data['cost-child1-provider1'],
    'costChild1Provider2': req.session.data['cost-child1-provider2'],
    'costChild2Provider1': req.session.data['cost-child2-provider1'],
    'costChild2Provider2': req.session.data['cost-child2-provider2']
  })
})

// Route for confirmation page
router.post('/confirmation', function (req, res) {
  const emmaAmount = calculateAccountAmount(req.session.data['cost-child1-provider1'], req.session.data['cost-child1-provider2'], emmaContribution)
  const clareAmount = calculateAccountAmount(req.session.data['cost-child2-provider1'], req.session.data['cost-child2-provider2'], clareContribution)
  res.render('cal-complete', { emmaAmount, clareAmount })
})

module.exports = router