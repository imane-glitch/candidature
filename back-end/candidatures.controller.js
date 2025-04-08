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
    const response = await ModelCandidature.find(req.body)
    } catch (error) {
    res.status(200).json(error.message)
    }

}

export const deleteCandidature = async (req,res) => {
  try {
      const response = await ModelCandidature.findByIdAndDelete(req.params.id)
      res.status(200).json({message: 'a été supprimé', response})
    } catch (error) {
      res.status(500).json(error.message)
    }   
  }


export const updateCandidature = async (req,res) => {
  try {
      const response = await ModelCandidature.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).json({message: 'a été modifié', response})
    }
    catch (error) {
      res.status(500).json(error.message)
    }

}