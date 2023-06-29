import livros from "../models/Livro.js";

class LivroController {
    static listarLivros = (req, res) => {
        livros.find()
        .then((livros) => {
            res.status(200).json(livros);
        })
        .catch((err) => {
            // Tratar o erro de alguma forma
            console.error(err);
            res.status(500).json({ error: 'Erro ao buscar os livros' });
        });
    }
}

export default LivroController