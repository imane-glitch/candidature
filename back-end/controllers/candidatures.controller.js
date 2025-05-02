import ModelCandidature from '../models/candidature.model.js';

export const createCandidature = async (req,res) => {
    try {
        // requete post
        console.log("A", req.body)
      const response = await ModelCandidature.create(req.body)
      res.status(201).json({message: 'a été ajouté', response})
    } catch (error) {
        console.log(error.message)
      res.status(500).json(error.message)
    }
}

export const readCandidatures = async (req,res) => {
  try {
    const response = await ModelCandidature.find()
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json(error.message)

  }
}

export const deleteCandidature = async (req,res) => {
  try {
    const { id } = req.params;
    const deletedApp = await ModelCandidature.findByIdAndDelete(id);
    if (!deletedApp) {
      return res.status(404).json({ message: 'n\'a pas été trouvé' });
    }
    res.status(200).json({ 
      message: 'a été supprimé',
      response: deletedApp 
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export const updateCandidature = async (req,res) => {
  try {
    const { id } = req.params;
    const updatedApp = await ModelCandidature.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedApp) {
      return res.status(404).json({ message: 'n\'a pas été trouvé' });
    }
    res.status(200).json({ 
      message: 'a été mis à jour',
      response: updatedApp 
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
}