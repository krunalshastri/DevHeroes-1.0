const router = require('express').Router();
const auth_m = require('../middleware/auth_m');
const Profile = require('../Models/profileModel');
const User = require('../Models/userModel');
const { body, validationResult } = require('express-validator');
const { findOneAndUpdate } = require('../Models/profileModel');
const e = require('express');

//get current user profile
router.route('/profile').get(auth_m, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['name', 'avatar']);

    if (!profile) {
      return res.status(400).json('No profile found!');
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error!');
  }
});

//Edit or create current user profile
router
  .route('/profile')
  .post(
    [
      auth_m,
      [
        body('status', 'Status is required!').not().isEmpty(),
        body('skills', 'Skills are required!').not().isEmpty(),
      ],
    ],
    async (req, res) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const {
        company,
        website,
        location,
        bio,
        status,
        githubusername,
        skills,
        youtube,
        facebook,
        twitter,
        instagram,
        linkedin,
      } = req.body;

      const profileF = {};
      profileF.user = req.user.id;
      if (company) profileF.company = company;
      if (website) profileF.website = website;
      if (location) profileF.location = location;
      if (bio) profileF.bio = bio;
      if (status) profileF.status = status;
      if (githubusername) profileF.githubusername = githubusername;
      if (skills) {
        if (!Array.isArray(skills)) {
          profileF.skills = skills.split(',').map((skills) => skills.trim());
        }
      }

      profileF.social = {};
      if (youtube) profileF.social.youtube = youtube;
      if (facebook) profileF.social.facebook = facebook;
      if (twitter) profileF.social.twitter = twitter;
      if (instagram) profileF.social.instagram = instagram;
      if (linkedin) profileF.social.linkedin = linkedin;

      try {
        let profile = await Profile.findOne({ user: req.user.id });

        if (profile) {
          //update the profile
          profile = await Profile.findOneAndUpdate(
            { user: req.user.id },
            { $set: profileF },
            { new: true }
          );

          return res.json(profile);
        }

        profile = new Profile(profileF);
        await profile.save();

        res.json(profile);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error!');
      }
    }
  );

//Get all the profiles
router.route('/profile/all').get(async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error!');
  }
});

//Get a particular user profiles
router.route('/profile/user/:userId').get(async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.userId,
    }).populate('users', ['name', 'avatar']);

    if (!profile) {
      return res.status(400).send('Profile not found!');
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(404).send('Profile not found!');
    }
    res.status(500).send('Server error!');
  }
});

//Delete the profile and user
router.route('/profile').delete(auth_m, async (req, res) => {
  try {
    await Profile.findOneAndRemove({ user: req.user.id });
    await User.findByIdAndRemove({ _id: req.user.id });
    res.json('User removed!');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error!');
  }
});

module.exports = router;
